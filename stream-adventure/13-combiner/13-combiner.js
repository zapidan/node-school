var streamCombiner = require('stream-combiner');
var zlib = require('zlib');
var split = require('split');
var through = require('through');


module.exports = function () {
    var input = through(write, end);

    var genreBooks;

    return streamCombiner(split(), input, zlib.createGzip()); 
        // read newline-separated json,
        // group books into genres,
        // then gzip the output

    function write(buffer) {

    	if (buffer.length === 0) {
    		return;
    	}
    	
    	buffer = JSON.parse(buffer);

		var type = buffer.type;

		if (type === 'genre') {
			if (genreBooks) {
				this.queue(JSON.stringify(genreBooks) + '\n');
			}

			genreBooks = {
				name: buffer.name,
				books: []
			}
		}

		else if (type === 'book') {
			genreBooks.books.push(buffer.name);
		}
    }

    function end() {
    	this.queue(JSON.stringify(genreBooks) + '\n');
    	this.queue(null);
    }
}