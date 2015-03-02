/* No timer set, just a basic callback to make it async */
function repeat(operation, num) {
	if (num <= 0) return;
		
	return (operation(), function() {
	 	repeat(operation, --num);
	 });
}

module.exports = repeat;