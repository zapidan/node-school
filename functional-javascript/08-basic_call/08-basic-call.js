/* Doesn't work */

function duckCount() {
	var args = Array.prototype.slice.call(arguments);

	return args.filter(function(object) {
		return Object.prototype.hasOwnProperty.call(object, 'quack');
	}).length;
}

module.exports = duckCount;
