app.controller('CoursesListCtrl', function($scope, cashedCourses){
	$scope.courses = cashedCourses.query();
});