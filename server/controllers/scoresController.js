var Score = require('mongoose').model('Score');

module.exports = {
	getUserScores: function(req, res) {
		console.log("YEY");
		console.log(req.params);
		Score.find( { $or:[ {'fromUsername': req.params.username}, {'toUsername': req.params.username}]}).exec(function(err, collection) {
			if (err) {
				console.log('Scores could not be loaded: ' + err);
			}
console.log(collection);
			res.send(collection);
		});
	}
};