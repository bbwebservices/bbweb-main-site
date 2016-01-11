var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compress = require('compression');

var app = express();

app.use(compress());
app.use(express.static(path.join(__dirname + './../')));

app.get('/', function(req, res) {
	res.sendFile('index.html');
})

app.listen(3100, function () {
	console.log("Server is up and running on port 3100");
})