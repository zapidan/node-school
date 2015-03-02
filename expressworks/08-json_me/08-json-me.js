var express = require('express');
var fs = require('fs');


var app = express();
var port = process.argv[2];
var filePath = process.argv[3];

app.get('/books', function(request, response) {
	var jsonFile = {};

	fs.readFile(filePath, 'utf-8', function(error, data) {
		if (error) {
			throw error;
		}

		jsonFile = JSON.parse(data);
		response.send(jsonFile);
	});
});

app.listen(port);