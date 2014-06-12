var mongoose = require('mongoose');
var encryption = require('../utilities/encryption');

var userSchema = mongoose.Schema({
	username: { type: String, require: '{PATH is required}', unique: true },
	firstName: { type: String, require: '{PATH is required}' },
	lastName: { type: String, require: '{PATH is required}' },
	salt: String,
	hashPass: String,
	roles: [String],
	invitationsCount: Number
});

userSchema.method({
	authenticate: function(password) {
		if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
			return true;
		} else {
			return false;
		}
	}
});

var User = mongoose.model('User', userSchema);

module.exports.seedInitialUsers = function() {

	User.find({}).exec(function(err, collection) {
		if (err) {
			console.log('Cannot find users: ' + err);
			return;
		}

		if (collection.length === 0) {
			var salt;
			var hashedPwd;

			salt = encryption.generateSalt();
			hashedPwd = encryption.generateHashedPassword(salt, 'ilian');
			User.create({
				username: 'ilian6806', 
				firstName: 'Ilian', 
				lastName: 'Iliev', 
				salt: salt, 
				hashPass: hashedPwd,
				roles: ['admin'],
				invitationsCount: 0
			});

			// salt = encryption.generateSalt();
			// hashedPwd = encryption.generateHashedPassword(salt, 'stefka');
			// User.create({
			// 	username: 'stefidka6806', 
			// 	firstName: 'Stefi', 
			// 	lastName: 'Vacheva', 
			// 	salt: salt, 
			// 	hashPass: hashedPwd,
			// 	roles: ['standart'],
			// 	invitationsCount: 0
			// });

			// salt = encryption.generateSalt();
			// hashedPwd = encryption.generateHashedPassword(salt, 'lubo');
			// User.create({
			// 	username: 'lubo6806', 
			// 	firstName: 'Lubo', 
			// 	lastName: 'Gavadinov', 
			// 	salt: salt, 
			// 	hashPass: hashedPwd,
			// 	roles: ['standart'],
			// 	invitationsCount: 0
			// });
			
			// salt = encryption.generateSalt();
			// hashedPwd = encryption.generateHashedPassword(salt, 'svetlio');
			// User.create({
			// 	username: 'svetlio6806', 
			// 	firstName: 'Svetoslav', 
			// 	lastName: 'Cenov', 
			// 	salt: salt, 
			// 	hashPass: hashedPwd,
			// 	roles: ['standart'],
			// 	invitationsCount: 0
			// });

			console.log('Users added');
		}
	});
	//User.remove({}).exec(function() { console.log('users deleted'); });
};