var passport = require('passport');
var LocalPassport = require('passport-local');
var User = require('mongoose').model('User');

module.exports = function() {
	passport.use(new LocalPassport(function(username, password, done) {
		User.findOne({ username: username }).exec(function(err, user) {
			if (err) {
				console.log('Error finding user...');
				return;
			}
		console.log(password);
		if (user) console.log(user.authenticate(password));
		if (user && user.authenticate(password)) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));

	passport.serializeUser(function(user, done) {
		if (user) {
			return done(null, user.id);
		}
	});

	passport.deserializeUser(function(id, done) {
		User.findOne({ _id: id }).exec(function(err, user) {
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	});
}