const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const ejs = require("ejs")

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const users = [
    {name: "Jeff Bezos", password: "Amazon"},
    {name: "Elon Musk", password: "Tesla"},
    {name: "Mark Zuckerberg", password: "Facebook"},
]

app.get("/", function(req, res) {
    res.render("index");
})

app.post("/", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    
    if (username === "." && password === ".") {
        res.redirect("/app")
    } 
    
})

app.get("/app", function(req, res) {
    res.render("app")
})

app.get("/lesson1", function(req, res) {
    res.render("lesson")
})

app.listen(3000, function() {
    console.log("Server started successfully");
});
