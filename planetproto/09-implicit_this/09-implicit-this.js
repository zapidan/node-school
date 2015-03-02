// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.


function Robot() {

}

/* Behind the scenes the Robot constructor is doing this:
function Robot() {
	var cow = {};
	cow.__proto__ = Robot.prototype;
	return cow;
}*/


function Vehicle() {
	return {};
}


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
