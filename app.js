var express = require('express');
// var bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true })); //BodyParser already inbuilt hai Express main. SO no need to install it
app.use(express.static('public')); // Dont need as of now as koi css,js file nahi hai.

app.set('view engine', 'ejs'); //Engine set kar lena while using ejs

var task = ['buy socks', 'practise with nodejs'];
var complete = [];

app.post('/addtask', function (req, res) {
	var newTask = req.body.newTask;
	task.push(newTask);
	res.redirect('/');
});

app.post('/removetask', function (req, res) {
	res.redirect('/');
});

app.get('/', function (req, res) {
	res.render('home', { task }); //Engine set karne se .ejs ka extension nahi dena paderga,
	// Aur object main agar key and value ka naam same hai toh ek baar likhne se ho jata hai
	// like {task} is actually {task: task}
	// but kuch aur hai toh dena padega {task: newTask}
});

app.listen(3000, function () {
	console.log('Server is running on port 3000');
});

//Also install nodemon `npm i nodemon -g` then run the file by nodemon app.js, isse baar baar server chalana nahi padega after making the changes
