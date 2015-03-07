var q = require('q');


var defer1 = q.defer();
var defer2 = q.defer();

function all(promise1, promise2) {
	
	var result = {
		count: 0,
		val1: "",
		val2: ""
	};

	var internalDefer = q.defer();

	promise1
		.then(function(value) {
			result.val1 = value;
			incrementAndResolve(result, internalDefer);
		})
		.then(null, internalDefer.reject)
		.done();

	promise2
		.then(function(value) {
			result.val2 = value;
			incrementAndResolve(result, internalDefer);
		})
		.then(null, internalDefer.reject)
		.done();

	return internalDefer.promise;
}

function incrementAndResolve(result, internalDefer) {
	counter = ++result.count;

	if (counter >= 2) {
    	internalDefer.resolve([result.val1, result.val2]);
    }
}

all(defer1.promise, defer2.promise)
	.then(console.log)
	.done();

setTimeout(function() {
	defer1.resolve("PROMISES");
	defer2.resolve("FTW");
}, 200);
