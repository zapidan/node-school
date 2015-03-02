var fs = require('fs');


var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split('\n')
// ignore the last line
console.log(lines.length - 1);
