var split = require('split');
var through = require('through');


var lineCount = 1;

process.stdin
	.pipe(split())
	.pipe(through(write))
	.pipe(process.stdout);


function write(buffer) {
	var line = buffer.toString();

	var line = lineCount % 2 === 0
			   ? line.toUpperCase()
			   : line.toLowerCase();

	this.queue(line + '\n');

	lineCount++;
}