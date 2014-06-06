app.factory('ScoreResource', function($resource, identity) {
	var ScoreResource = $resource('/api/scores/:username', { username: identity.currentUser.username }); 

	return ScoreResource;
});