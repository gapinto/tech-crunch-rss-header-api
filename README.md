tech-crunch-rss-reader-api
============================

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

## API link (HTTP::GET)
* https://5m8u8msbd3.execute-api.us-east-1.amazonaws.com/test/api/posts

## Installation & Usage
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
  
## Links
* [serverless-offline plugin](https://github.com/dherault/serverless-offline)

## How to develop and test offline?
We have used [serverless-offline plugin](https://github.com/dherault/serverless-offline)

* Inside of the root folder execute the follow command:

```
  sls offline
```

* You should see something like this:

```
  Serverless: Routes for rss-reader:
  Serverless: GET /api/posts
  Serverless: POST /{apiVersion}/functions/tech-crunch-rss-reader-api-test-rss-reader/invocations
  Serverless: Offline [HTTP] listening on http://0.0.0.0:4000
```
* You can use the postman for test it.

## How to deploy?

* You should have a amazon user
* Create a user using IAM adding AdministratorAccess permission
* Save your credentials
* Install the AWS CLI, the steps you can see here: https://github.com/aws/aws-cli
* You should put your credential in: '~/.aws/credential' 
* Inside of the folder you should create a file called `credentials` and put something like this:
```
[serverless-admin]
aws_access_key_id=XXXXXXXX
aws_secret_access_key=XXXXXX
```
* 'serverless-admin' is the profile configured in serverless.yml
* Now you are ready to deploy.
* Just type `sls deploy` command on the terminal and wait the serverless finish the process.
