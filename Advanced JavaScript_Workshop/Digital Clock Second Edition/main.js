$(document).ready(function(){

	setInterval(function() {
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var ampm;

		if(h>=12) {
			ampm = "PM";
		} else if(h<12 || h === 24) {
			ampm = "AM"
		}
		if(h > 12) {
			h = h - 12;
		}
		if(h<10) {
			h = "0" + h;
		}
		if(m%2 === 1){
			document.body.style.backgroundColor = "gray";
		}
		if(m<10) {
			m = "0" + m;
		}
		if(s<10) {
			s = "0" + s;
		}
		document.getElementById("hour").innerHTML =  h;
		document.getElementById("minute").innerHTML = m;
		document.getElementById("second").innerHTML = s;
		document.getElementById("ampm").innerHTML = ampm;
	}, 1000);

	setInterval(function() {
		var d = new Date();
		var monthArray = [January, February, March, April, June, July, August, September, October, November, December];
		var month = monthArray[d.getMonth()];

	}, 100000)

});