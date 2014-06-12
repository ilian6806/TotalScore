app.controller('InvitationsCtrl', function($scope, $http, InvitationsResource, notifier, identity) {
	$scope.identity = identity;
	$scope.invitations = InvitationsResource.query();

	$scope.send = function (invitation) {
		$http.post('/api/invitations/send', { 
			from: identity.currentUser.username, 
			to: invitation.user, 
			game: invitation.gameName
		})
		.success(function(res) {
			if (res.success) {
				notifier.success('Invitation sended to ' + invitation.user +'!');
				$('input').val('');
			} else if (res.error) {
				notifier.error(res.error);
			}
		})
		.error(function(res) {
			notifier.error('Something went wrong...');
		});
	}

	$scope.accept = function(invitation) {
		$http.post('/api/invitations/accept', invitation)
		.success(function(res) {
			notifier.success('Invitation from ' + invitation.fromUsername + ' accepted.');
			identity.currentUser.invitationsCount--;
			$scope.identity = identity;
			$scope.invitations = InvitationsResource.query();
		})
		.error(function(res) {
			notifier.error('Something went wrong...');
		});
	}

	$scope.decline = function(invitation) {
		ConfirmController.show('Are sure you want to decline the invitation from ' + invitation.fromUsername + '?', function() {
			$http.post('/api/invitations/decline', invitation)
			.success(function(res) {
				notifier.success('Invitation from ' + invitation.fromUsername + ' declined.');
				identity.currentUser.invitationsCount--;
				$scope.identity = identity;
				$scope.invitations = InvitationsResource.query();
			})
			.error(function(res) {
				notifier.error('Something went wrong...');
			});
		});
	}
});