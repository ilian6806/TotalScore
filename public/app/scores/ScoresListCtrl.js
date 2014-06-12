app.controller('ScoresListCtrl', function($scope, notifier, ScoreResource){

	$scope.scores = ScoreResource.user.query();

	$scope.deleteScore = function(score) {
		ConfirmController.show('Are sure you want to delete this score ?', function() {
			ScoreResource.id.get({id: score._id}).$delete({id: score._id}, function() {
				$scope.scores = ScoreResource.user.query();
				notifier.success('Score deleted !');
			}, function() {
				notifier.error('Failed to delete the score !');
			});
		});
	}
});