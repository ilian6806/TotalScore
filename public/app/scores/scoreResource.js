app.factory('ScoreResource', function($resource, identity) {
	var ScoreResource = {
		user: $resource('/api/scores/:username', { username: identity.currentUser.username }),
		id: $resource('/api/score/:id', {id:'@id'}, { update: { method: 'PUT', isArray: false }})
	}
	return ScoreResource;
});