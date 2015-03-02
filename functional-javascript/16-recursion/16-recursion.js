function getDependencies(tree, result) {
  result = result || [];
  var dependencies = tree.dependencies || []; // exit condition

  Object.keys(dependencies).forEach(function(name) {
  	var version = dependencies[name].version;
  	var fullName = name + '@' + version;

  	// check for duplicates
  	if (result.indexOf(fullName) === -1) {
    	result.push(fullName);
	}
    getDependencies(dependencies[name], result);
  });

  return result.sort();
}

module.exports = getDependencies;