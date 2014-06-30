$(document).on('ready', function() {
	function stopwatch(hours, minutes, seconds) {
	    hours = hours || 0
	    minutes = minutes || 0
	    seconds = seconds || 0

	    alert(hours + " hours, " + minutes + " minutes, " + seconds + " seconds." )
	}

	stopwatch(0, 1)
});