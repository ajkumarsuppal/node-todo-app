var express = require('express')
var bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

var task = ["buy socks", "practise with nodejs"]
var complete = []

app.post("/addtask", function(req, res){
    var newTask = req.body.newTask
    task.push(newTask)    
    res.redirect("/")
})

app.post("/removetask", function(req, res){
    
    res.redirect("/")
})

app.get("/", function(req, res){
    res.render("home.ejs", {task: task})
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})