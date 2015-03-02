function duckCount() {
	var args = Array.prototype.slice.call(arguments);

	return args.reduce(function(count, current) {
		var isDuck =  Object.prototype.hasOwnProperty.call(current, 'quack');
		return count + (isDuck ? 1 : 0);
	}, 0); // initialize value to 0
}

module.exports = duckCount;