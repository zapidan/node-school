var http = require('http');
var async = require('async');


var url = process.argv[2];
var numberArray = ['one', 'two', 'three'];

async.reduce(numberArray, 0, function(previous, number, callback) {
	var body = '';
	var result = '';
	http.get(url + '?number=' + number, function(response) {
		response.on('data', function(chunk) {
			body += chunk.toString()
		});

		response.on('end', function(chunk) {
			result = Number(body) + previous
			callback(null, result);
		});
	}).on('error', function(error) {
		callback(error);
	});

}, function callback(error, result) {
	if (error) {
		return console.log(error);
	}

	console.log(result);
});