function curryN(fn, n) {
	if (typeof n !== 'number') {
		n = fn.length;
	}

	function getCurriedFn(previous) {
		return function(arg) {
			var totalArgs = previous.concat(arg);
			if (totalArgs.length === n) {
				return fn.apply(this, totalArgs);
			}
			else {
				return getCurriedFn(totalArgs);
			}
		}
	}

	return getCurriedFn([]);
}

module.exports = curryN;