app.factory('InvitationsResource', function($resource, identity) {
	var Invitations = $resource('/api/invitations/:username', { username: identity.currentUser.username }); 

	return Invitations;
});
