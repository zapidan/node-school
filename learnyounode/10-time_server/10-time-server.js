var net = require('net');

var server = net.createServer(callback);
var port = Number(process.argv[2]);
server.listen(port);


function callback(socket) {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1; // months go from 0 to 11
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	var formattedDate = getFormattedDate(year, month, day, hours, minutes) + '\n'
 
	socket.write(formattedDate);
	socket.end();
}

function getFormattedDate(year, month, day, hours, minutes) {
	formattedDate = [year, formatNumber(month), formatNumber(day)].join('-') + ' ' +
	                [formatNumber(hours), formatNumber(minutes)].join(':');

	return formattedDate;
}

// Add leading 0 so number always has 2 digits
function formatNumber(number) {
	return number < 10 ? '0' + number : number;
}