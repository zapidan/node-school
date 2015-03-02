var crypto = require('crypto');

var passphrase = process.argv[2];
var decipher = crypto.createDecipher('aes256', passphrase);

process.stdin
	.pipe(decipher)
	.pipe(process.stdout);
