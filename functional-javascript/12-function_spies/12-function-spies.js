function Spy(targetObject, methodName) {
	// targetObject = {methodName: function() {}}
	var oldMethod = targetObject[methodName];
	var spy = { count: 0 };

	// replace method with spy method
	targetObject[methodName] = function() {
		spy.count++;
		return oldMethod.apply(targetObject, arguments); // invoke original method
	}

	return spy;
}

module.exports = Spy;