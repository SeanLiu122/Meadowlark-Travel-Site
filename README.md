# Meadowlark-Travel-Site
## Overview
Meadowlark Travel Site is a static webpage app to display the list of popular places or places that the user wishes to travel; a dream vacation trip. The app also having a photo gallery section that can be viewed.

The app is still work-in-progress...

*The app is now live and deployed by Heroku at: [Meadowlark-travel-site](https://enigmatic-basin-25606.herokuapp.com/).*

In the future:
* Meadowlark will provide many services: pickup, rental, hotel, fly-cheap, etc.
* A more-realistic user account page.

*This app is heavily based on the [MaterializeCSS](https://materializecss.com/) framework for aesthetic.*

## Getting Started
These instructions will get a copy of the project up and running on the local machine for development, testing, and maintanence purposes.

### Prerequisites
Install and setup MongoDB first for the application to function properly because the local app is connecting to the local mongodb.
  * [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/?_ga=2.235436548.4094096.1533414753-345378373.1529090851)

### How To Run
Run the following commands in a terminal:
```
mongod
```
On another terminal:
```
npm install
```
```
node app.js
or
npm start (if nodemon installed locally)
```
On the browser and type ```http://localhost:3000``` on the URL path.
### Libraries
```
express-handlebars
```
* https://github.com/ericf/express-handlebars
* used as the template engine for the project
```
method-override
```
* https://github.com/expressjs/method-override
* allow using HTTP verbs on the client side
```
connect-flash
```
* https://github.com/jaredhanson/connect-flash
* used to send messages to views (alert a success or failure message)
```
express-session
```
* https://github.com/expressjs/session
* used for establishing sessions with clients of the site and for authentication
```
body-parser
```
* https://github.com/expressjs/body-parser
* used to retrieve the body of requests.
```
passport
```
* https://github.com/jaredhanson/passport
* used to authenticate the credential request (with local strategy)
```
mongoose
```
* https://github.com/Automattic/mongoose
* used to define schemas and create models that connect to the database

## Acknowledgements
* This project was inspired by the VidJot project and the Meadowlark project from the "Web Development with Node and Express" book and written by Ethan Brown.

