var Course = require('mongoose').model('Course');

module.exports = {
	getAllCourses : function(req, res) { 
		Course.find({}).exec(function(err, collection) {
			if (err) {
				console.log('Courses could not be loaded: ' + err);
			}

			res.send(collection);
		});
	},
	getCourseById : function(req, res) { 
		Course.findOne({ _id: req.params.id }).exec(function(err, course) {
			if (err) {
				console.log('Course can not be loaded: ' + err);
			}

			res.send(course);
		});
	}
};
