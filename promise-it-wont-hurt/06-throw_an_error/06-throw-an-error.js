var q = require('q');


var json = process.argv[2];

function parsePromised(json) {
	var defer = q.defer();

	var result;

	try {
		result = JSON.parse(json);
	}
	catch (e) 
	{
		defer.reject(e);
	}

	defer.resolve(result);
	
	return defer.promise;
}

parsePromised(json).
	then(null, console.log)

