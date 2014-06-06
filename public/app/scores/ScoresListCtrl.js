app.controller('ScoresListCtrl', function($scope, ScoreResource){
	$scope.scores = ScoreResource.query();
});