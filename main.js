$(document).on('ready', function() {
	function stopwatch(hours, minutes, seconds) {
	    hours = hours || 0
	    minutes = minutes || 0
	    seconds = seconds || 0

	

	// Time spent on page
	// var time = 0
	setInterval(function(){
		// time = time + 1
		// if(time%60<10){
		// 	seconds = "0" + time%60
		// }
		// else{
		// 	seconds = time%60
		// }


		if(minutes === 0 && seconds === 0) {hours -=1; minutes = 60;}
		if(seconds === 0) {minutes -=1; seconds = 60;};
		


		$("body").html( "Countdown: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.")

		seconds -= 1

		if(hours === 0 && minutes === 0 && seconds === 0) {alert("Time's up!")}
	
	},1000);


	}

	stopwatch(1, 1)


	//Getter-Setter

	var href = function(el, url) {
		if (url) {						// or  if(arguments.length === 2)
			el.attr('href', url);
		}
		else{
			return el.attr('href');
		}
	}

	// Getter
	var myUrl = href( $('.myLink'));

	// Setter
	href( $('.myLink'), "http://nfl.com");

});