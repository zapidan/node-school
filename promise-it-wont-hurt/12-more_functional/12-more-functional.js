var http = require("q-io/http");
var _ = require('lodash');


var cacheURL = 'http://localhost:7000/';
var dbURL = 'http://localhost:7001/';

var buildDBPath = _.bind(String.prototype.concat, dbURL);

http.read(cacheURL)
	.then(_.compose(http.read, buildDBPath))
	.then(_.compose(console.log, JSON.parse))
	.then(null, console.log)
	.done();
