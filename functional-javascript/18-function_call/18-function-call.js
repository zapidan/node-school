// var args = Array.prototype.slice.call(arguments)
// var args = slice(arguments)

module.exports = Function.prototype.call.bind(Array.prototype.slice);

// The value of 'this' in Function.call is the function to be executed
// Bind returns a new function with the value of 'this' fixed to whatever was passed as first argument