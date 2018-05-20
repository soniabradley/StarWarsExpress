 // Dependencies
 // ===========================================================
 var express = require("express");
 var bodyParser = require('body-parser')
 var path = require("path");

// Sets up the Express App
// =============================================================
 var app = express();
 var PORT = 3000;

 // Sets up the Express app to handle data parsing
 // parse application/json
 app.use(bodyParser.json())

 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({
     extended: true
 }))

 // parse an HTML body into a string
 app.use(bodyParser.text())

 // parse some custom thing into a Buffer
 app.use(bodyParser.json({
     type: 'application/vnd.api+json'
 }))



 // Data turn into an array of characters
 // ===========================================================
 var characters = [{
     routeName: "yoda",
     name: "Yoda",
     role: "Jedi Master",
     age: 900,
     forcePoints: 2500
 }, {
     routeName: "darthmaul",
     name: "Darth Maul",
     role: "Sith Apprentice",
     age: 200,
     forcePoints: 1200
 }, {
     routeName: "obi",
     name: "Obi Wan Kenobi",
     role: "Not Sure",
     age: 150,
     forcePoints: 1500
 }];
 // Routes
 // ===========================================================
 // Basic route that sends the user first to the AJAX Page
 app.get("/", function (req, res) {
     // res.send("Welcome to the Star Wars Page!")
     res.sendFile(path.join(__dirname, "view.html"));
 });

 app.get("/add", function(req, res){
     res.sendFile(path.join(__dirname, "add.html"));
 })

 // Get all characters
 app.get("/all", function (req, res) {
     res.json(characters);
 });

 app.get("/api/:characters?", function (req, res) {
     var chosen = req.params.characters;

     if (chosen) {
         console.log(chosen);

         for (var i = 0; i < characters.length; i++) {
             if (chosen === characters[i].routeName) {
                 res.json(characters[i]);
                 return;
             }
         }
         return res.json(false);
     }
     return res.json(characters);
 });

 // Create New Characters - takes in JSON input
 app.post("/api/new", function (req, res) {
     // req.body hosts is equal to the JSON post sent from the user
     var newcharacter = req.body;
     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

     console.log(newcharacter);

     // We then add the json the user sent to the character array
     characters.push(newcharacter);

     // We then display the JSON to the users
     res.json(newcharacter);
 });

 // Listener
 // ===========================================================
 app.listen(PORT, function () {
     console.log("App listening on PORT " + PORT);
 });