var concatStream = require('concat-stream');
var http = require('http');


process.stdin
	.pipe(concatStream(function write(buffer) {
		var reverseString = buffer.toString().split('').reverse().join('');
		console.log(reverseString);
	}));


