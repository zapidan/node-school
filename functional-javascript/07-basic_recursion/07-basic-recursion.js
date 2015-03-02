function reduce(array, fn, initialValue) {
 	return (function recursiveReduce(previousValue, currentIndex) {
 		if (currentIndex > array.length - 1) return previousValue;

 		return recursiveReduce(fn(previousValue, array[currentIndex], currentIndex, array), currentIndex + 1); 		
 	}(initialValue, 0));
}

module.exports = reduce;