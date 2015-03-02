var http = require('http');
var async = require('async');


var url1 = process.argv[2];
var url2 = process.argv[3];

async.series({
	requestOne: function(callback) {
		httpGet(url1, callback);
	},

	requestTwo: function(callback) {
		httpGet(url2, callback);
	}
},	function mainCallback(error, result) {
		if (error) {
			return console.log(error);
		}

		console.log(result);
});


function httpGet(url, callback) {
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
}