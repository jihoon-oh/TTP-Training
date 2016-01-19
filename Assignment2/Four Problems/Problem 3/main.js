function validator(){
	var n = prompt("Enter a number");
	if(n<10) {
		alert("Your number " + n + " is less than 10!");
	}
	else {
		console.log("Your number " + n + " is at least 10!");
	}
}
validator();