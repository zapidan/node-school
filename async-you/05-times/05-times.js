var http = require('http');
var async = require('async');


var host = process.argv[2];
var port = process.argv[3];
var url = 'http://' +  host + ':' + port;

async.series({
	post: function(callback) {
		async.times(5, function(n, usersCallback) { 
			// index runs 0-4
			httpPost(++n, usersCallback);
		},
		function usersCallback(error) {
			if (error) {
				return callback(error);
			}

			callback();
		});
	},

	get: function(callback) {
		var body = '';
		http.get(url + '/users', function(response) {
			response.on('data', function(chunk) {
				body += chunk.toString()
			});

			response.on('end', function(chunk) {
				callback(null, body);
			});
		}).on('error', function(error) {
			callback(error);
		});
	}
}, function mainCallback(error, result) {
	if (error) {
		return console.log(error);
	}

	console.log(result.get); // all results are collected as an object
});


function createUser(user_id) {
	return JSON.stringify({'user_id': user_id});
}

function httpPost(user_id, usersCallback) {
    var user = createUser(user_id);

	var opts = {
			hostname: host,
			port: port,
			path: '/users/create',
			method: 'POST',
			headers: {
				'Content-Length': user.length
			}
		};
		
	var request = http.request(opts, function(response) {
		response.on('data', function(chunk) {
		});

		response.on('end', function() {
			usersCallback();
		});
	}).on('error', function(error) {
		usersCallback(error);
	});

	request.write(user);
	request.end();
}