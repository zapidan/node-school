var http = require('http');
var fs = require('fs');


var port = Number(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer(callback);
server.listen(port);


function callback(request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' });

	var fileStream = fs.createReadStream(filePath);
	return fileStream.pipe(response);
}
