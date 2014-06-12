var mongoose = require('mongoose');

var invitationSchema = mongoose.Schema({
	fromUsername: String,
	toUsername: String,
	gameName: String,
	date: Date
});

var Invitation = mongoose.model('Invitation', invitationSchema);

module.exports.seedInitialCourses = function() {

	Invitation.find({}).exec(function(err, collection) {
		if (err) {
			console.log('Cannot find invitataions: ' + err);
			return;
		}
		if (collection.length === 0) {
			Invitation.create({fromUsername: "ilian6806", toUsername: "stefi", gameName: "biliard", date: new Date()});
			Invitation.create({fromUsername: "ilian6806", toUsername: "svetlio", gameName: "jaga", date: new Date()});
			Invitation.create({fromUsername: "lubo", toUsername: "ilian6806", gameName: "biliard", date: new Date()});
			Invitation.create({fromUsername: "stefi", toUsername: "ilian6806", gameName: "bowling", date: new Date()});

			console.log('Invitations added');
		}
	});
	//Invitation.remove({}).exec(function() { console.log('ivitations deleted'); });
};