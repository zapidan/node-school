var http = require('http');
var async = require('async');


var url = process.argv[2];
var count = 0;
var body = '';

function httpGet(callback) {
	http.get(url, function(response) {
		response.on('data', function(chunk) {
			body += chunk.toString();
		});

		response.on('end', function(chunk) {
			count++;
			callback();
		});
	}).on('error', function(error) {
		callback(error);
	});	
}

async.whilst(
	function () {
		return  body !== 'meerkat';
	},
	function(callback) {
		httpGet(callback);
	},
	function callback(error) {
		if (error) {
			return console.log(error);
		}

		console.log(count);
	}
);