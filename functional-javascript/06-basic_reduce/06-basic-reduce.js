function countWords(inputWords)  {
	return inputWords.reduce(function(wordCountMap, currentWord) {
	    wordCountMap[currentWord] = ++wordCountMap[currentWord] || 1;
		return wordCountMap
	}, {}); // initialize wordCountMap to {}
}

module.exports = countWords;