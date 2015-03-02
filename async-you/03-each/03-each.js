var http = require('http');
var async = require('async');


var urls = [process.argv[2], process.argv[3]];

async.each(urls, function(url, callback) {
	var body = '';
	http.get(url, function(response) {
		response.on('data', function(chunk) {
		});

		response.on('end', function(chunk) {
			callback();
		});
	}).on('error', function(error) {
		callback(error);
	});
}, function mainCallback(error) {
	if (error) {
		console.log(error);
	}
});