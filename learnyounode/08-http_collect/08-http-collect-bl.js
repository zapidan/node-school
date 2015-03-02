var http = require('http');
var bl = require('bl');


var url = process.argv[2];

http.get(url, callback);

function callback(response) {
	response.pipe(bl(function (error, data) {	
	    if (error) throw error;

        data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
}