# Insightweet
# Find out about what people are like, anywhere. 

## An app deployed on IBM bluemix using Watson personality insights based on an aggregate of location specific Tweets from Twitter. 
## Built on NodeJS, using Express.js, and the Jade templating language. 

currently [hosted](http://personality-insights-nodejs-davidawad-1759.eu-gb.mybluemix.net/landing) on IBM Bluemix

using NodeJS, ExpressJS, 





  The IBM Watson [Personality Insights][service_url] service uses linguistic analysis to extract cognitive and social characteristics from input text such as email, text messages, tweets, forum posts, and more. By deriving cognitive and social preferences, the service helps users to understand, connect to, and communicate with other people on a more personalized level.

You can try this! :D 
[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/davidawad/Insightweet)


## Running locally
  The application uses [Node.js][http://nodejs.org/] and [npm][https://www.npmjs.com/] so you will have to download and install them as part of the steps below.

1. Copy the credentials from your `personality-insights-service` service in Bluemix to `app.js`, you can see the credentials using:
2. Install [Node.js](http://nodejs.org/)
3. Go to the project folder in a terminal and run:
    `npm install`
4. Start the application
5.  `node app.js`
6. Go to `http://localhost:3000`

[cloud_foundry]: https://github.com/cloudfoundry/cli

