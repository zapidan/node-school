function loadUsers(userIds, load, done) {
	var users = [];
	var usersLoaded = 0;
	var totalUsers = userIds.length;

	userIds.forEach(function(userId, index) {
		load(userId, function callback(user) {
			users[index] = user;
			usersLoaded++;

			if (usersLoaded === totalUsers) {
				done(users);
			}
		});
	});
}

module.exports = loadUsers;