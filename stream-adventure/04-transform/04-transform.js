var through = require('through');

process.stdin.pipe(through(write)).pipe(process.stdout);

function write(buffer) {
	this.queue(buffer.toString().toUpperCase());
}