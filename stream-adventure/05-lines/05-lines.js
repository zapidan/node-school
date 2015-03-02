var split = require('split');
var through = require('through');

var even = false; // first line is odd

process.stdin
	.pipe(split()) // split new lines
	.pipe(through(write))
	.pipe(process.stdout);


/* Option 1: Uses boolean even/odd and updates lines. Option 2 with counter in 05-lines-counter.js */
function write(buffer){
	var line = buffer.toString();
	
	if (even) {
		line =  line.toUpperCase();
	}
	else {
		line = line.toLowerCase();
	}

	this.queue(line + '\n');

	even = !even;
}
