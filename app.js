'use strict';

var express = require('express'),
  app = express(),
  bluemix = require('./config/bluemix'),
  watson = require('watson-developer-cloud-alpha'),
  extend = require('util')._extend,
  fs = require('fs'),
  dummy_text = fs.readFileSync('mobydick.txt');

var query = 'hack'; //searching for 'hack' but query changes by default
var city = '40.71448,-74.00598,100km' ; // new york by default
// Bootstrap application settings
require('./config/express')(app);

// if bluemix credentials exists, then override local
/*
var credentials = extend({
    version: 'v2',
    url: '<url>',
    username: '<username>',
    password: '<password>'
}, bluemix.getServiceCreds('personality_insights')); // VCAP_SERVICES
*/

var credentials ={
  'version' : 'v2',
  'url' : "https://gateway.watsonplatform.net/personality-insights/api",
	'username' : "7efc43c0-aaa7-47da-a967-eef4635b7ae9",
  'password' : "1FBcB84UAYgt"
}

// Create the service wrapper
var personalityInsights = new watson.personality_insights(credentials);

// render index page
app.get('/', function(req, res){
  //console.log(req.connection.remoteAddress);
  console.log(req);

  var tweets = "@lifehacker: Organize those open bags in your freezer with binder clips: http://t.co/0jb3iZizkA http://t.co/ch7UNxdikq less comfy ride.@marinochris_ get this fucking hack solved because you have been afflicting my Twitter for the";
  readTweets(function(tweets) {
    res.render('index', { content: tweets });
  });
});

app.post('/', function(req, res) {
  personalityInsights.profile(req.body, function(err, profile) {
    if (err) {
      if (err.message){
        err = { error: err.message };
      }
      return res.status(err.code || 500).json(err || 'Error processing the request');
    }
    else
      return res.json(profile);
  });
});

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/landing', function(req, res){
  res.render('landing');
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/landing', function(req, res){


  var form_city = req.body.city.toLowerCase() ;
  switch(form_city) {

    case form_city==="washington dc":
      city='38.8951100,-77.0363700,100km' ;
        break;
    case form_city==="san francisco":
      city = '37.7749300,-122.4194200,100km';
        break;
    //
    case form_city==="chicago":
      city = '41.8500300,-87.6500500,100km';
        break;

    case form_city==="moscow":
        city = '55.7522200,37.6155600,100km';
          break;

    default:
        break;
    }

  query = req.body.query ;

  var tweets = "@lifehacker:"
  readTweets(function(tweets) {
    res.render('index', { content: tweets });
  });

});

var port = process.env.VCAP_APP_PORT || 3000;
app.listen(port);
console.log('listening at:', port);

var Twitter = require('node-twitter');

var twitterSearchClient = new Twitter.SearchClient(
    'pmw5vXFaPIziNYIX20oXuihXv',
    'HkM0xftGz1R1Nqhn9D6YP0qKp79jeyUV8HVwboT4YZmK5odpdu',
    '2830064099-9e8pyD2X9Rlz0VS5WCwhdnWmw472l269uC9VlkP',
    'gUpoL2J2kHm0KCe3RkwAQRvxGm3urw92dISo9QqQQ9POe'
);

function readTweets(callback) {
  var tweets = "";
  twitterSearchClient.search({'q':query, 'geocode':city }, function(error, result) {
      if (error){
          console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
      }
      if (result){
        for(var i=0; i<result.statuses.length; i++){
            tweets += result.statuses[i].text ;
          }
        }
        console.log(query);
        console.log(tweets);
        callback(tweets);
      }
  );
}
