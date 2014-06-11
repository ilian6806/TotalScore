var Invitation = require('mongoose').model('Invitation');
var Score = require('mongoose').model('Score');
var User = require('mongoose').model('User');

module.exports = {
	getUserInvitations: function(req, res) {
		Invitation.find({ 'toUsername': req.params.username }).exec(function(err, collection) {
			if (err) {
				console.log('Invitations could not be loaded: ' + err);
			}

			res.send(collection);
		});
	},
	sendInvitation: function(req, res) {
		User.findOne({ username: req.body.to }).exec(function(err, user) {
			if (err) {
				console.log('Invitation could not be sended: ' + err);
			}
			if (user) {
				if (user.username == req.body.from) {
					res.send({ error: 'You can\'t send invitation to yourself.' });
				} else {
					user.invitationsCount++;
					user.save();
					var newInvitation = {
						fromUsername: req.body.from,
						toUsername: req.body.to,
						gameName: req.body.game,
						date: new Date()
					};
					Invitation.create(newInvitation);
					res.send({ success: newInvitation });
				}
			} else {
				res.send({ error: 'No such user.' });
			}
		});
	},
	acceptInvitation: function(req, res) {
		Invitation.findOne({ _id: req.body._id }).remove().exec(function(err, collection) {
			User.findOne({ username: req.body.toUsername }).exec(function(err, user) {
				if (err) {
					console.log('No such user: ' + err);
				}
				user.invitationsCount--;
				user.save();

				Score.create({
					fromUsername: req.body.fromUsername, 
					toUsername: req.body.toUsername, 
					fromUsernameScore: 0, 
					toUsernameScore: 0, 
					gameName: req.body.gameName, 
					date: new Date()
				});

				res.send({ success: user.invitationsCount });
			});
		});
	},
	declineInvitation: function(req, res) {
		Invitation.findOne({ _id: req.body._id }).remove().exec(function(err, collection) {
			if (err) {
				console.log('Invitation could not be declined: ' + err);
			}
			User.findOne({ username: req.body.toUsername }).exec(function(err, user) {
				if (err) {
					console.log('No such user: ' + err);
				}
				user.invitationsCount--;
				user.save();
				res.send({ success: user.invitationsCount });
			});
		});
	}
};