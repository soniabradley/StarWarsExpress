# StarWarsExpress
This application uses node and express to handle it's routing.  It routes to its own custom API that will be accessed with jQuery and Ajax calls.

# To install
Git Clone the repository

Navigate to the folder where the repository exists

Run the command $ npm init

Run the command $ npm install body-parser express --save

Then run the command $ node server.js

Browser start with search for localhost:8080 

# Built With

* [req.param()](https://sailsjs.com/documentation/reference/request-req/req-param) Returns the value of the parameter with the specified name.
* [res.end()](https://stackoverflow.com/questions/29555290/what-is-the-difference-between-res-end-and-res-send) Will end the response process.  res.send() will send the HTTP response.
* return; immediately exits a function, if it matches character, it will never get to res.send, instead it will exit app.get and move on in our code.
* [Express](https://www.npmjs.com/package/express) makes routing easy using Node.js by setting var app = express(); so we can easily call it.
    * Features robust routing
    * HTTP helpers
    * Generates applications quickly
* [body-parser](https://www.npmjs.com/package/body-parser) Middleware.  Makes it easy for the back and front-end to talk to each other.  

# Author
Sonia Bradley

# License
This project is licensed under the MIT License

# Acknowledgments

