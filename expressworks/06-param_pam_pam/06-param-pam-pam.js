var express = require('express');
var crypto = require('crypto');


var app = express();
var port = process.argv[2];

app.put('/message/:ID', function(request, response) {
	var id = request.params.ID;
	var hash = crypto
				.createHash('sha1')
				.update(new Date().toDateString() + id)
				.digest('hex');

	response.send(hash);
});

app.listen(port);