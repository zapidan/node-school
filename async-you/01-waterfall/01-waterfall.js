var http = require('http');
var async = require('async');
var fs = require('fs');


var path = process.argv[2];

async.waterfall([
	function readFile(callback) {
		fs.readFile(path, 'utf-8', function(error, data) {
			if (error) {
				return callback(error);
			}

			callback(null, data);
		});
	},

	function httpRequest(data, callback) {
		var body = '';
		http.get(data, function(response) {
			response.on('data', function(chunk) {
				body += chunk.toString();
			});

			response.on('end', function(chunk) {
				callback(null, body);
			});
		}).on('error', function(error) {
			callback(error);
		});
	}
], function mainCallback(error, result) {
	if (error) {
		return console.log(error);
	}

	console.log(result);
});
