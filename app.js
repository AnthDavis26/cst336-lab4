const express = require("express");
const app = express();
app.engine('php', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.render("index.php");
});

app.get("/mercury", function(req, res){
	res.render("mercury.php");
});

app.get("/venus", function(req, res){
	res.render("venus.php");
});

// server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Running Express Server..")
});