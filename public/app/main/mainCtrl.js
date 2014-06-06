app.controller('MainCtrl', function($scope, cashedCourses, identity) {
	$scope.courses = cashedCourses.query();
	$scope.identity = identity;
});