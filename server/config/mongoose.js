var mongoose = require('mongoose');
var user = require('../models/User');
var invitations = require('../models/Invitation');
var scores = require('../models/Score');

module.exports = function(config) {

	mongoose.connect(config.db);

	var db = mongoose.connection;

	db.once('open', function(err) {
		if(err) {
			console.log("DB cound not be open:" + err);
			return;
		}
		console.log("Up and running at " + config.port + "...");
	});
	 
	db.on('error', function(err) {
		console.log('DB error: ' + err);
	});

	 user.seedInitialUsers();
	// invitations.seedInitialCourses();
	// scores.seedInitialScores();
};