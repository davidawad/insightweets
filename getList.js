var Twitter = require('node-twitter');

var twitterSearchClient = new Twitter.SearchClient(
    'pmw5vXFaPIziNYIX20oXuihXv',
    'HkM0xftGz1R1Nqhn9D6YP0qKp79jeyUV8HVwboT4YZmK5odpdu',
    '2830064099-9e8pyD2X9Rlz0VS5WCwhdnWmw472l269uC9VlkP',
    'gUpoL2J2kHm0KCe3RkwAQRvxGm3urw92dISo9QqQQ9POe'
);

var tweets = "";

twitterSearchClient.search({'q':'hack', 'geocode':'40.71448,-74.00598,100km' }, function(error, result) {
    if (error){
        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
    }

    if (result){

      for(var i=0; i < result.statuses.length; i++){
          // console.log(result.statuses[i].text);
          tweets += result.statuses[i].text ;
        }
      }
      console.log(tweets);
    }
);
