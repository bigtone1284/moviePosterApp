var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var request = require("request");
    
var port = process.env.PORT || 3000;
var app = express();

require('dotenv').load();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.set("view options", {
  layout: false
});

app.use(express.static(__dirname + "/public"));

app.get('/movies_api', function (req, res, next) {
	var queryParams = {
		api_key: process.env.API_KEY,
		page: req.query.page || 1
	};
	request({
		uri: 'http://api.themoviedb.org/3/movie/now_playing',
		method: 'GET',
		qs: queryParams,
		json: true
	}, function (error, response, body) {
		if (error) res.status(500).send({error: "Internal Server Error"});
		res.send(body);
	});
});

app.listen(port);
