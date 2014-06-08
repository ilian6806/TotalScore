app.controller('MainCtrl', function($scope, cashedCourses, identity) {
	$scope.identity = identity;
	$scope.courses = cashedCourses.query();
});