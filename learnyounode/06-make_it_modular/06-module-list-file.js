var fs = require('fs');
var path = require('path');

var filteredFiles = [];

function filterDirectoryFiles(directory, extension, callback) {
  fs.readdir (directory, function (error, files) {
  	if (error) 
  		return callback(error);

  	// files.forEach(function (file) {
  	// 	if (path.extname(file) === ('.' + extension)) {
  	// 		filteredFiles.push(file);
  	// 	}
  	// });

    files = files.filter(function (file) {
    	return path.extname(file) === '.' + extension;
    })

  	callback(null, files);
  });
}

// exports.filterDirectoryFiles = filterDirectoryFiles;
module.exports = filterDirectoryFiles