var q = require('q');


var json = process.argv[2];

q.fcall(JSON.parse, json).
	then(null, console.log)

