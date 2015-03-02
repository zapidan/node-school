var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');


var algorithm = process.argv[2];
var passphrase = process.argv[3];

var gunzipStream = zlib.createGunzip();
var cypherStream = crypto.createDecipher(algorithm, passphrase);

var parser = tar.Parse();

parser.on('entry', function (e) {
	var md5Stream = crypto.createHash('md5', { encoding: 'hex' });

	if (e.type !== 'File') {
		return;
	}

	e
	 .pipe(md5Stream)
	 .pipe(through(write, end))
	 .pipe(process.stdout)



	function write(buffer) {
		this.queue(buffer.toString());
	}

	function end() {
		this.queue(" " + e.path + '\n');
		this.queue(null);
	}

});

process.stdin
	.pipe(cypherStream)
	.pipe(gunzipStream)
	.pipe(parser);