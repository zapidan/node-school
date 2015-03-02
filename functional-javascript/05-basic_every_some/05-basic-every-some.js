function checkUsersValid(goodUsers) {
	return function(suppliedUsers) {
		return suppliedUsers.every(function(suppliedUser) {
			return goodUsers.some(function(goodUser) {
				return suppliedUser.id === goodUser.id;
			});
		});
	}
}

module.exports = checkUsersValid;