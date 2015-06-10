# [insightweets](http://personality-insights-nodejs-davidawad-1759.mybluemix.net/landing)
# "Find out about what people are like, anywhere."

## This Hack won the IBM Bluemix prize at HackNY

## An app deployed on IBM bluemix using Watson personality insights based on an aggregate of location specific Tweets from Twitter. 
## Built on NodeJS, using Express.js, and the Jade templating language. 

currently [hosted](http://personality-insights-nodejs-davidawad-1759.eu-gb.mybluemix.net/landing) on IBM Bluemix

using NodeJS, ExpressJS,Jade templating, and the Twitter API. 


  The IBM Watson Personality Insights service uses linguistic analysis to extract cognitive and social characteristics from input text such as email, text messages, tweets, forum posts, and more. By deriving cognitive and social preferences, the service helps users to understand, connect to, and communicate with other people on a more personalized level.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/davidawad/Insightweet)


## Getting Started

1. Create a Bluemix Account

  [Sign up][sign_up] in Bluemix, or use an existing account. Watson Services in Beta are free to use.

2. Download and install the [Cloud-foundry CLI][cloud_foundry] tool

3. Edit the `manifest.yml` file and change the `<application-name>` to something unique.
  ```none
applications:
- services:
  - personality-insights
  name: <application-name>
  command: node app.js
  path: .
  memory: 256M
  ```
  The name you use will determinate your application url initially, e.g. `<application-name>.mybluemix.net`.

4. Connect to Bluemix in the command line tool
  ```sh
  $ cf api https://api.ng.bluemix.net
  $ cf login -u <your user ID>
  ```

5. Create the Personality Insights service in Bluemix

  ```sh
  $ cf create-service personality_insights "IBM Watson Personality Insights Monthly Plan" personality-insights-service
  ```

6. Push it live!

  ```sh
  $ cf push
  ```

See the full [Getting Started][getting_started] documentation for more details, including code snippets and references.

## Running locally
  The application uses [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/) so you will have to download and install them as part of the steps below.

1. Copy the credentials from your `personality-insights-service` service in Bluemix to `app.js`, you can see the credentials using:

    ```sh
    $ cf env <application-name>
    ```
    Example output:
    ```sh
    System-Provided:
    {
    "VCAP_SERVICES": {
      "personality_insights": [{
          "credentials": {
            "url": "<url>",
            "password": "<password>",
            "username": "<username>"
          },
        "label": "personality_insights",
        "name": "personality-insights-service",
        "plan": "IBM Watson Personality Insights Monthly Plan"
     }]
    }
    }
    ```

    You need to copy `username`, `password` and `url`.

2. Install [Node.js](http://nodejs.org/)
3. Go to the project folder in a terminal and run:
    `npm install`
4. Start the application
5.  `node app.js`
6. Go to `http://localhost:3000`

## Troubleshooting

To troubleshoot your Bluemix app the main useful source of information are the logs, to see them, run:

  ```sh
  $ cf logs <application-name> --recent
  ```

## License

  This sample code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).


[cloud_foundry]: https://github.com/cloudfoundry/cli

### Bluemix Prize Winner
![](http://blog.rocketsoftware.com/wp-content/uploads/2015/02/Bluemix-logo-right.png)

### Built at HackNY
![](http://hacknymasters.com/assets/img/h_logo.png)
