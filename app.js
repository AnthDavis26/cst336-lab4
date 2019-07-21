const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.render("index.ejs");
});

app.get("/mercury", function(req, res){
	res.render("mercury.ejs");
});

app.get("/venus", function(req, res){
	res.render("venus.ejs");
});

app.get("/earth", function(req, res){
	res.render("earth.ejs");
});

app.get("/mars", function(req, res){
	res.render("mars.ejs");
});

app.get("/jupiter", function(req, res){
	res.render("jupiter.ejs");
});

app.get("/saturn", function(req, res){
	res.render("saturn.ejs");
});

app.get("/uranus", function(req, res){
	res.render("uranus.ejs");
});

app.get("/neptune", function(req, res){
	res.render("neptune.ejs");
});

app.get("/secret", function(req, res){
	res.render("secret.ejs");
});


// Heroku server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Running Express Server..")
});

/* Offline testing only
app.listen("8081", "127.0.0.1", function(){
	console.log("Running Express Server..")
});
*/