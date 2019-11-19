const express = require("express");
const app = express();

var faker = require("faker");
var randomSentence = faker.hacker.phrase();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/howitsused", function(req, res) {
    res.render("howitsused.html");
});

app.get("/howitworks", function(req, res) {
    res.render("howitworks.html");
});

app.get("/aihistory", function(req, res) {
    res.render("aihistory.html");
});


//server listener
app.listen("8080", "127.0.0.1", function() {
    console.log("Running Express Server...");
});


