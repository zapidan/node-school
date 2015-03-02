function repeat(operation, num) {
  if (num <= 0) return;
  return function() {
	  operation()
	  return repeat(operation, --num);
  }
}

function trampoline(fn) {
  while (fn());
}

module.exports = function exportedRepeat(operation, num) {
  	return trampoline(repeat(operation, num));
}