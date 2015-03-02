var duplexer = require('duplexer');
var through = require('through');
var fs = require('fs');


module.exports = function(counter) {
	var counts = {};
	var input = through(write, end);

	return duplexer(input, counter);

	function write(buffer) {
		counts[buffer.country] = (counts[buffer.country] || 0) + 1;
	}

	function end() {
		counter.setCounts(counts);
	}
}