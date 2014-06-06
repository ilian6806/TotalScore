var mongoose = require('mongoose');

var scoreSchema = mongoose.Schema({
	fromUsername: String,
	toUsername: String,
	fromUsernameScore: Number,
	toUsernameScore: Number,
	gameName: String,
	date: Date
});

var Score = mongoose.model('Score', scoreSchema);

module.exports.seedInitialScores = function() {

	Score.find({}).exec(function(err, collection) {
		if (err) {
			console.log('Cannot find users: ' + err);
			return;
		}

		//Score.remove({}, function() {
			if (collection.length === 0) {
					Score.create({fromUsername: "ilian6806", toUsername: "stefidka6806", fromUsernameScore: 10, toUsernameScore: 25, gameName: "biliard", date: new Date()});
					Score.create({fromUsername: "stefidka6806", toUsername: "ilian6806", fromUsernameScore: 20, toUsernameScore: 52, gameName: "snooker", date: new Date()});
					Score.create({fromUsername: "lubo6806", toUsername: "stefidka6806", fromUsernameScore: 31, toUsernameScore: 12, gameName: "jaga", date: new Date()});
					Score.create({fromUsername: "ilian6806", toUsername: "lubo6806", fromUsernameScore: 32, toUsernameScore: 22, gameName: "fliperi", date: new Date()});
					Score.create({fromUsername: "ilian6806", toUsername: "svetlio6806", fromUsernameScore: 14, toUsernameScore: 21, gameName: "football", date: new Date()});
					console.log('Users added');
			}
		//}); //remove scores
	});
};