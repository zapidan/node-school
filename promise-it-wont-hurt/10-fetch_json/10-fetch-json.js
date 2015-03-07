var http = require("q-io/http");


var url = 'http://localhost:1337';

http.read(url)
	.then(function(json) {
		console.log(JSON.parse(json));
	})
	.then(null, console.log)
	.done()