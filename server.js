var friends = require('./app/data/friends.js');
// var apiRoutes = require('./app/routing/apiRoutes.js');
// var htmlRoutes = require('./app/routing/htmlRoutes');

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;
express.static("./app/public")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// app.use("./app/routing/htmlRoutes.js");
// app.use("./app/routing/apiRoutes.js");

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

app.get("/api/friends", function (req, res) {
    res.json(friends)
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});