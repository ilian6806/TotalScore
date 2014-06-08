var auth = require('./auth');
var controllers = require('../controllers');

module.exports = function(app) {

	app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
	app.post('/api/users', controllers.users.createUser);
	app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

	app.get('/api/scores/:username', auth.isAuthenticated, controllers.scores.getUserScores);
	app.get('/api/score/:id', auth.isAuthenticated, controllers.scores.getScoreById);
	app.put('/api/score/:id', auth.isAuthenticated, controllers.scores.updateScore);

	app.get('/api/invitations/:username', controllers.invitations.getUserInvitations);

	app.get('/api/courses', controllers.courses.getAllCourses);
	app.get('/api/courses/:id', controllers.courses.getCourseById);

	app.get('/partials/:partialArea/:partialName', function(req, res) {
		res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName);
	});

	app.post('/login', auth.login);
	app.post('/logout', auth.logout);

	app.get('/api/*', function(req, res){
		res.status(404);
		res.end();
	});

	app.get('*', function(req, res){
		res.render('index', { currentUser: req.user });
	});
}