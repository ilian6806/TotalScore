app.controller('ScoreDetailsCtrl', function($scope, $routeParams, $q, notifier, ScoreResource) {

	$scope.score = ScoreResource.id.get({ id: $routeParams.id});

	$scope.updateScore = function(score) {

		score.fromUsernameScore = parseInt(score.fromUsernameScore);
		score.toUsernameScore = parseInt(score.toUsernameScore);

		var updatedScore = new ScoreResource.id(score);

		updatedScore.$update({ id: $routeParams.id }).then(function() {
			notifier.success('Score updated !');
		}, function(response) {
			notifier.error('Something went wrong. Please try again later.');
		});
	}
});