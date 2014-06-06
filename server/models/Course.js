var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	name: String,
	featured: Boolean,
	published: Date,
	tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

module.exports.seedInitialCourses = function() {

	Course.find({}).exec(function(err, collection) {
		if (err) {
			console.log('Cannot find users: ' + err);
			return;
		}

		//Course.remove({}, function() {
			if (collection.length === 0) {
				Course.create({name: "C#", featured: true, published: new Date('1/5/2013')});
				Course.create({name: "HTML", featured: false, published: new Date('12/4/2013')});
				Course.create({name: "CSS", featured: true, published: new Date('6/4/2013')});
				Course.create({name: "JS", featured: true, published: new Date('5/5/2013')});
				Course.create({name: "MongoDB", featured: false, published: new Date('4/4/2013')});
				Course.create({name: "PHP", featured: true, published: new Date('1/4/2013')});
				Course.create({name: "NodeJS", featured: false, published: new Date('2/6/2013')});
				Course.create({name: "AngularJS", featured: false, published: new Date('10/5/2013')});
				Course.create({name: "Ember.js", featured: true, published: new Date('12/3/2013')});
				Course.create({name: "MySQL", featured: false, published: new Date('11/5/2013')});

				console.log('Courses added');
			}
		//}); //remove users
	});
};