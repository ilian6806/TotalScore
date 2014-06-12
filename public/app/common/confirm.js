var ConfirmController = (function() {

	var speed = 100;

	function show(message, acceptFunc, declineFunc) {
		$('#dialog-content').html(message);
		$('#dialog-container').fadeIn(speed, function() {
			$('#btn-yes').off('click').on('click', function() {
				if (acceptFunc) {
					acceptFunc();
				}
				$('#dialog-container').fadeOut(speed);
			});
			$('#btn-no').off('click').on('click', function(){
				if (declineFunc) {
					declineFunc();
				}
				$('#dialog-container').fadeOut(speed);
			});
		});
	}

	return {
		show: show
	};
}());
