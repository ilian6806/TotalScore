var usersController = require('../controllers/usersController');
var coursesController = require('../controllers/coursesController');
var scoresController = require('../controllers/scoresController');

module.exports = {
	users: usersController,
	courses: coursesController,
	scores: scoresController
}