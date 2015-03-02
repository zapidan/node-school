var http = require('http');
var async = require('async');


var urls = process.argv.slice(2, 4);

async.map(urls, function(url, callback) {
	var body = '';
	http.get(url, function(response) {
		response.on('data', function(chunk) {
			body += chunk.toString();
		});

		response.on('end', function(chunk) {
			callback(null, body);
		});
	}).on('error', function(error) {
		callback(error);
	});
}, function mainCallback(error, result) {
	if (error) {
		return console.log(error);
	}

	console.log(result);
});