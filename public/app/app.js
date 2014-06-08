var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true);

	var routeUserCheck = {
		admin: {
			authenticate: function(auth) {
				return auth.isAuthorizedForRole('admin');
			}
		},
		authenticated: {
			authenticate: function(auth) {
				return auth.isAuthenticated();
			}
		}
	}

	$routeProvider
		.when('/', {
			templateUrl: '/partials/main/home',
			controller: 'MainCtrl'
		})
		.when('/invitations', {
			templateUrl: '/partials/invitations/invitations',
			controller: 'InvitationsCtrl',
			resolve: routeUserCheck.authenticated
		})
		.when('/scores', {
			templateUrl: '/partials/scores/scores-list',
			controller: 'ScoresListCtrl',
			resolve: routeUserCheck.authenticated
		})
		.when('/score/:id', {
			templateUrl: '/partials/scores/score-details',
			controller: 'ScoreDetailsCtrl',
			resolve: routeUserCheck.authenticated
		})
		.when('/courses', {
			templateUrl: '/partials/courses/courses-list',
			controller: 'CoursesListCtrl'
		})
		.when('/courses/:id', {
			templateUrl: '/partials/courses/course-details',
			controller: 'CourseDetailsCtrl'
		})
		.when('/signup', {
			templateUrl: '/partials/account/signup',
			controller: 'SignUpCtrl',
		})
		.when('/profile', {
			templateUrl: '/partials/account/profile',
			controller: 'ProfileCtrl',
			resolve: routeUserCheck.authenticated
		})
		.when('/admin/users', {
			templateUrl: '/partials/admin/users-list',
			controller: 'UserListCtrl',
			resolve: routeUserCheck.admin
		})
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        if (rejection == 'not authorized') {
            $location.path('/');
        }
    });
});