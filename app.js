const express = require("express");
const faker = require("faker");
const app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//Notes - Changed file names from .html to .ejs, 
//added in span id tags in header.ejs to distinguish nav menu title color
//(refer to script tags present in other .ejs files),
//and passed in new variable from route to view in render lines.
//The faker is in the header.ejs view as a random quote.

//routes
app.get("/", function(req, res) {
    res.render("index.ejs", {"randomQuote":faker.hacker.phrase()});
});

app.get("/index", function(req, res) {
    res.render("index.ejs", {"randomQuote":faker.hacker.phrase()});
});

app.get("/howitsused", function(req, res) {
    res.render("howitsused.ejs", {"randomQuote":faker.hacker.phrase()});
});

app.get("/howitworks", function(req, res) {
    res.render("howitworks.ejs", {"randomQuote":faker.hacker.phrase()});
});

app.get("/aihistory", function(req, res) {
    res.render("aihistory.ejs", {"randomQuote":faker.hacker.phrase()});
});


//server listener
/*app.listen("8080", "127.0.0.1", function() {
    console.log("Running Express Server...");
});*/

//accounts for publishing to Heroku
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server...");
});

