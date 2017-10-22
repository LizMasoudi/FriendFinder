var express = require("express");
var app = express();

app.get("/api/friends", function (req, res) {
    res.json(users)
});
