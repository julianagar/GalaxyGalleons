const lessonPlans = require('./data/lessonplans.json')
const planets = require('./data/planets.json')
const dictionary = require('./data/dictionary.json')
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const ejs = require("ejs")

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let users = [
    {name: "Elon Musk", password: "Tesla", progress: [0, 0, 0,  0, 0]},
]

app.get("/", function(req, res) {
    res.render("index");
})

app.post("/", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    
    users.forEach(function(login) {
        if (login.name === username && login.password === password) {
            const theUser = login
            res.render("app")
        } else {
            res.send("There was a problem logging in. Please try again.")
        }
    })
})

app.get("/app", function(req, res) {
    res.render("app")
})

const lesson1 = lessonPlans.lessons[0]
console.log(lesson1)

app.get("/lesson1", function(req, res) {
    res.render("lesson", {lesson1: lesson1, index: 0})
})

const lesson2 = lessonPlans.lessons[1]
console.log(lesson2)

app.get("/lesson2", function(req, res) {
    res.render("lesson", {lesson1: lesson2, index: 1})
})

const lesson3 = lessonPlans.lessons[2]
console.log(lesson3)

app.get("/lesson3", function(req, res) {
    res.render("lesson", {lesson1: lesson3, index: 2})
})

const lesson4 = lessonPlans.lessons[3]
console.log(lesson4)

app.get("/lesson4", function(req, res) {
    res.render("lesson", {lesson1: lesson4, index: 3})
})

const lesson5 = lessonPlans.lessons[4]
console.log(lesson5)

app.get("/lesson5", function(req, res) {
    res.render("lesson", {lesson1: lesson5, index: 4})
})

app.get("/dictionary", function(req, res) {
    res.render("dictionary", {dictionary: dictionary})
})

const Mercury = planets.planets[0]

app.get("/Mercury", function(req, res) {
    res.render("planets", {planet: Mercury});
});

const Venus = planets.planets[1]

app.get("/Venus", function(req, res) {
    res.render("planets", {planet: Venus});
});

const Earth = planets.planets[2]

app.get("/Earth", function(req, res) {
    res.render("planets", {planet: Earth});
});

const Mars = planets.planets[3]

app.get("/Mars", function(req, res) {
    res.render("planets", {planet: Mars});
});

const Jupiter = planets.planets[4]

app.get("/Jupiter", function(req, res) {
    res.render("planets", {planet: Jupiter});
});

const Saturn = planets.planets[5]

app.get("/Saturn", function(req, res) {
    res.render("planets", {planet: Saturn});
});

const Uranus = planets.planets[6]

app.get("/Uranus", function(req, res) {
    res.render("planets", {planet: Uranus});
});

const Neptune = planets.planets[7]

app.get("/Neptune", function(req, res) {
    res.render("planets", {planet: Neptune});
});

app.listen(3000, function() {
    console.log("Server started successfully");
});
