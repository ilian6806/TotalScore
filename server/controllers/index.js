var usersController = require('../controllers/usersController');
var coursesController = require('../controllers/coursesController');
var scoresController = require('../controllers/scoresController');
var invitationsController = require('../controllers/invitationsController');

module.exports = {
	users: usersController,
	courses: coursesController,
	scores: scoresController,
	invitations: invitationsController
}