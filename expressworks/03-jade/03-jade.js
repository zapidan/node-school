var express = require('express');


var app = express();
var port = process.argv[2];
var templatePath = process.argv[3];

app.set('view engine', 'jade');
app.set('views', templatePath);

app.get('/home', function(request, response) {
	response.render('index', {date: new Date().toDateString()})
});

app.listen(port);