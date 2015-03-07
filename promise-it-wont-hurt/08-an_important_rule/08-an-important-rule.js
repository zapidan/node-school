var q = require('q');


var defer = q.defer();

function throwMyGod() {
	throw new Error("OH NOES");
};

function iterate(number) {
	number = Number(number);

	console.log(number);

	return number + 1;
};

var iteration = q.fcall(iterate, 1)

for (i = 2; i < 11; i++) {
	if (i == 6) {
		iteration = iteration.then(throwMyGod);
	}
	else {
		iteration = iteration.then(iterate);
	}
}
	iteration = iteration.then(null, console.log);
