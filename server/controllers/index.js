var usersController = require('../controllers/usersController');
var scoresController = require('../controllers/scoresController');
var invitationsController = require('../controllers/invitationsController');

module.exports = {
	users: usersController,
	scores: scoresController,
	invitations: invitationsController
}