var filterFiles = require('./06-module-list-file.js')

var dir = process.argv[2];
var extension = process.argv[3];

filterFiles(dir, extension, callback);

function callback(error, files) {
	if (error) throw error;

	files.forEach(function (file) {
		console.log(file);
	});
}