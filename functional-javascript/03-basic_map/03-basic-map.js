function doubleAll(numbers) {
	var doubledNumbers = numbers.map(function(number) {
		return number * 2;
	}); 

	return doubledNumbers;
}

module.exports = doubleAll;