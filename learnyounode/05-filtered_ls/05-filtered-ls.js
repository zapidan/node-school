var fs = require('fs');
var path = require('path');


var dir = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir (dir, callback);

function callback (error, files) {
	if (error) throw error;
	
	files.forEach(function(filename) {
		var ext = path.extname(filename);
        if (ext === extension) {
        	console.log(filename);
        }
	});
}