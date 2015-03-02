var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.argv[2];

app.use(bodyParser.urlencoded({ extended: false }));

// reverse html form value of str
// <form><input name="str"/></form>
app.post('/form', function(request, response) {
	// handle headers with send
	response.send(request.body.str.split('').reverse().join(''));
});

app.listen(port);