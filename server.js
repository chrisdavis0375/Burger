// DEPENDENCIES
// ==============================================
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

// Setting port to 8080
var PORT = process.env.PORT || 8080;

// Set handlebars as default enine template
app.engine("handlebars", exphbs({ defaultLayout: 'main'}));
app.set("view engine", "handlebars");


var router = require("./controllers/burgers_controllers.js");
app.use("/", router);

// Tells server to run with port 8080
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})