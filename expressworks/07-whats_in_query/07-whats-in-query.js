var express = require('express');


var app = express();
var port = process.argv[2];

app.get('/search', function(request, response) {
	var query = request.query;
	response.send(query);
});

app.listen(port);