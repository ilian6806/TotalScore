app.controller('ScoreDetailsCtrl', function($scope, $routeParams, $q, notifier, ScoreResource) {

	$scope.score = ScoreResource.id.get({ id: $routeParams.id});

	$scope.updateScore = function(score) {

		score.fromUsernameScore = parseInt(score.fromUsernameScore);
		score.toUsernameScore = parseInt(score.toUsernameScore);

		var reg = new RegExp('^[0-9]+$');

		if (!reg.test(score.fromUsernameScore) || !reg.test(score.toUsernameScore)) {
			notifier.error('Invalid score.');
			return;
		}

		var updatedScore = new ScoreResource.id(score);

		updatedScore.$update({ id: $routeParams.id }).then(function() {
			notifier.success('Score updated !');
		}, function(response) {
			notifier.error('Something went wrong. Please try again later.');
		});
	}
});