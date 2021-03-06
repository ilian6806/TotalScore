var Score = require('mongoose').model('Score');

module.exports = {
	getUserScores: function (req, res) {
		Score.find( { $or:[ {'fromUsername': req.params.username}, {'toUsername': req.params.username}]}).exec(function(err, collection) {
			if (err) {
				console.log('Scores could not be loaded: ' + err);
			}

			res.send(collection);
		});
	},
	getScoreById: function (req, res) {
		Score.findOne({ _id: req.params.id }).exec(function(err, collection) {
			if (err) {
				console.log('Score could not be loaded: ' + err);
			}

			res.send(collection);
		});
	},
	updateScore: function (req, res) {
		var updatedScore = req.body;

		Score.findOne({ _id: req.body._id }).exec(function(err, score) {
			if (err) {
				console.log('No such score: ' + err);
			}

			score.fromUsernameScore = updatedScore.fromUsernameScore;
			score.toUsernameScore = updatedScore.toUsernameScore;
			score.save();

			res.end();
		});
	},
	deleteScore: function (req, res) {
		Score.findOne({ _id: req.params.id }).remove().exec(function(err, collection) {
			if (err) {
				console.log('Score could not be deleted: ' + err);
			}
			res.end();
		});
	}
};