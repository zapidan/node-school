var http = require('http');
var url = require('url');


var unixEndpoint = '/api/unixtime';
var isoEndpoint = '/api/parsetime';

var port = Number(process.argv[2]);

var server = http.createServer(callback);

server.listen(port);

function callback(request, response) {
  if (request.method === 'GET') {
      var parsedUrl = url.parse(request.url, true);
      var pathname = parsedUrl.pathname;
      var dateString = parsedUrl.query.iso;
      var result;

      if (pathname === unixEndpoint) {
      	result = getUnixTimeStamp(dateString);
      }
      else if (pathname === isoEndpoint) {
      	result = getIsoTimeObject(dateString);
      }

      console.log(result);

      if (result) {
      	 response.writeHead(200, { 'Content-Type' : 'application/json'});
      	 response.write(JSON.stringify(result));
      	 response.end();
      }

      else {
      	response.writeHead(404);
      	response.end()
      }
  }
}

function getUnixTimeStamp(dateString) {
	console.log("getting unixtime");
	return { 
		unixtime: getTime(dateString)
	};
}

function getIsoTimeObject(dateString) {
 	console.log("getting timeobject " + dateString.toString());
	var date = new Date(getTime(dateString));
	return {
	        hour: date.getHours(),
		  minute: date.getMinutes(),
		  second: date.getSeconds()
		};
}

function getTime(dateString) {
	return Date.parse(dateString);
}

