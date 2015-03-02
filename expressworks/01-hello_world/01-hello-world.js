var express = require('express');


var port = process.argv[2];

var app = express();

app.get('/home', function(request, response) {
	response.end('Hello World!');
});
app.listen(port);