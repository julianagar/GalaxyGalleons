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
    
    if (username === "Elon Musk" && password === "Tesla") {
        res.render("homepage", {username: username})
    } 
    
})

app.listen(3000, function() {
    console.log("Server started successfully");
});
