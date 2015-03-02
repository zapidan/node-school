function repeat(operation, num) {
	if (num <= 0) return;

	operation();

	// Release control every 10 iterations
	if (num % 10 ===0) {
		setTimeout(function() {
			repeat(operation, --num);
		});
	}
	else {
		repeat(operation, --num);
	}
}

module.exports = repeat;