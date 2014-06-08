var Score = require('mongoose').model('Score');

module.exports = {
	getUserScores: function (req, res) {
		console.log("getUserScores");
		console.log(req.params);

		Score.find( { $or:[ {'fromUsername': req.params.username}, {'toUsername': req.params.username}]}).exec(function(err, collection) {
			if (err) {
				console.log('Scores could not be loaded: ' + err);
			}

			res.send(collection);
		});
	},
	getScoreById: function (req, res) {
		console.log("getScoreById");
		console.log(req.params);

		Score.findOne({ _id: req.params.id }).exec(function(err, collection) {
			if (err) {
				console.log('Score could not be loaded: ' + err);
			}

			res.send(collection);
		});
	},
	updateScore: function (req, res) {
		var updatedScore = req.body;

		Score.update({ _id: req.body._id }, updatedScore, function() {
			res.end();
		});
	}
};