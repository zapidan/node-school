/* Option 1: recursion */
function highOrderFunction(operation, num) {
	if (num <= 0) return;
	operation();
	highOrderFunction(operation, num - 1);
}

/* Option 2: for loop */
// function highOrderFunction(operation, num) {
// 	for (i = 0; i < num; i++) {
// 		operation();
// 	}
// }

module.exports = highOrderFunction;