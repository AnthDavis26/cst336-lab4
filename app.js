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

// server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Running Express Server..")
});