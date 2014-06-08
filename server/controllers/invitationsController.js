var Invitation = require('mongoose').model('Invitation');

module.exports = {
	getUserInvitations: function(req, res) {
		console.log("YEY2");
		console.log(req.params);
		Invitation.find({ 'toUsername': req.params.username }).exec(function(err, collection) {
			if (err) {
				console.log('Invitations could not be loaded: ' + err);
			}
			console.log(collection);
			res.send(collection);
		});
	}
};