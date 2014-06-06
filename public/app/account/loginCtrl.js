app.controller('LoginCtrl', function($scope, $location, notifier, identity, auth) {

	$scope.identity = identity;

	$scope.login = function(user) {
		auth.login(user).then(function(success) {
			if (success) {
				notifier.success('Successfull login!');
			} else {
				notifier.error('Wrong username or password!');
			}
		});
	};

	$scope.logout = function() {
		auth.logout().then(function() {
			notifier.success('Successfull logout!');
			if ($scope.user) {
                $scope.user.username = '';
                $scope.user.password = '';
            }
			$location.path('/');
		});
	}
});