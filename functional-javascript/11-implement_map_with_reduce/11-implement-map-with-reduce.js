function arrayMap(array, fn) {
	var results = [];
	return array.reduce(function(previous, current, index, array) {
		return previous.concat(fn.call(null, current, null, null)); // only applying function on current item
	}, []);
}

module.exports = arrayMap;