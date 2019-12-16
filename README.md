tech-crunch-rss-reader-api
============================

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

## How to develop and test offline?
We have used [serverless-offline plugin](https://github.com/dherault/serverless-offline) and [serverless-dynamodb-local plugin](https://github.com/99xt/serverless-dynamodb-local). You can declare your table templates and seeds in `offline/migrations/` folder just like the `tech-crunch-rss-reader-seed.json` template. When you spin up the offline server, these tables will be used as the datasources for your lambda functions.

## Production vs Offline
Thanks to the offline plugin's environment variable `IS_OFFLINE` we can select between local dynamodb and aws dynamodb. 
```
var dynamodbOfflineOptions = {
        region: "localhost",
        endpoint: "http://localhost:8000"
    },
    isOffline = () => process.env.IS_OFFLINE;

var client = isOffline() ? new AWS.DynamoDB.DocumentClient(dynamodbOfflineOptions) :  new AWS.DynamoDB.DocumentClient();
```

## Installation & Usage
* Install docker
  ```
* Install docker compose
  ```
* Install o NVM 
  ```
  https://github.com/creationix/nvm
  ```
  ```
* Install PostMan 
  ```
  https://blog.bluematador.com/posts/postman-how-to-install-on-ubuntu-1604
  ```
* Install serverless
  ```
  npm i -g serverless
  ```
* Install project dependencies. `cd tech-crunch-rss-reader-api` and type,
```
  npm install 
```
* Build project with docker-composer
```
  docker-compose up --build
```
Notes:
```
* All email configuration is localized in:
```
 tech-crunch-rss-reader-api/secrets.json
```
* Docker is exposing the port 3000
```
Type: http://localhost:3000/posts on post man
Choose: Get
And click on button send
```

## Links
* [serverless-dynamodb-local plugin](https://github.com/99xt/serverless-dynamodb-local)
* [serverless-offline plugin](https://github.com/dherault/serverless-offline)