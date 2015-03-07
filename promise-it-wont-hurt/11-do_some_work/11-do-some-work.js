var http = require("q-io/http");


var cacheURL = 'http://localhost:7000';
var dbURL = 'http://localhost:7001';

// http.read(cacheURL)
// 	.then(function(userId) {
// 		http.read(dbURL + '/' + userId.toString())
// 			.then(function(user) {
// 				user = JSON.parse(user.toString());
// 				console.log(user);
// 			})
// 			.then(null, console.log)
// 			.done();
// 	})
// 	.then(null, console.log)
// 	.done()

http.read(cacheURL)
	.then(function(userId) {
		return http.read(dbURL + '/' + userId.toString());		
	})
	.then(function(user) {
		user = JSON.parse(user.toString());
		console.log(user);
	})
	.then(null, console.log)
	.done();