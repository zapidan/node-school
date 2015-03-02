var fs = require('fs');


fs.readFile(process.argv[2], 'utf8', callback);

function callback (error, data) {
  if (error) throw error;
 
 console.log(data.split('\n').length - 1)
}
