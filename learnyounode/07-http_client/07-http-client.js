var http = require('http');

var url = process.argv[2];

http.get(url, callback);

function callback(response) {
	response.setEncoding('utf8');
	
	response.on('data', console.log);
	
	response.on('error', function(error) {
		console.log(error);
	});
}