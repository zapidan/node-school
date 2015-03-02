var http = require('http');
var through = require('through');


var port = Number(process.argv[2]);

var server = http.createServer(function (request, response) {
	if (request.method === 'POST') {
		request.pipe(through(write)).pipe(response);
	}
	response.end();
});

function write(buffer) {
	this.queue(buffer.toString().toUpperCase());
}

server.listen(port);