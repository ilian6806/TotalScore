app.factory('cashedCourses', function(CourseResource){
	
	var cashedCourses;

	return {
		query: function() {
			if (!cashedCourses) {
				cashedCourses = CourseResource.query();
			}

			return cashedCourses;
		}
	}
});