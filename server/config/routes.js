var auth = require('./auth');
var controllers = require('../controllers');

module.exports = function(app) {

	app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
	app.post('/api/users', controllers.users.createUser);
	app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

	app.get('/api/scores/:username', auth.isAuthenticated, controllers.scores.getUserScores);
	app.get('/api/score/:id', auth.isAuthenticated, controllers.scores.getScoreById);
	app.put('/api/score/:id', auth.isAuthenticated, controllers.scores.updateScore);
	app.delete('/api/score/:id', auth.isAuthenticated, controllers.scores.deleteScore);

	app.get('/api/invitations/:username', auth.isAuthenticated, controllers.invitations.getUserInvitations);
	app.post('/api/invitations/send', auth.isAuthenticated, controllers.invitations.sendInvitation);
	app.post('/api/invitations/accept', auth.isAuthenticated, controllers.invitations.acceptInvitation);
	app.post('/api/invitations/decline', auth.isAuthenticated, controllers.invitations.declineInvitation);

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