app.controller('InvitationsCtrl', function($scope, InvitationsResource, notifier, identity) {
	$scope.identity = identity;
	$scope.invitations = InvitationsResource.query();
	// identity.currentUser.invitationsCount = $scope.invitations.length;

	// console.log(identity.currentUser.invitationsCount);
	// console.log($scope.invitationsCount);
});