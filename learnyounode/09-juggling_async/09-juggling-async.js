var http = require('http');
var bl = require('bl');
// Using concat-stream instead of bl threw the error

var urls = process.argv.slice(2);
var results = [];
var resultsCount = 0;

function httpGet(url, index) {
	http.get(url, function (response) {

		response.pipe(bl(function (error, data) {
			if (error) throw error;

			results[index] = data.toString();

			resultsCount++;

			if (resultsCount === urls.length) {
				printResults();
			}
		}));
	});
}

function printResults() {
	results.forEach(function (result) {
		console.log(result);
	});
}

urls.forEach(function (url, i) {
	httpGet(url, i);
});