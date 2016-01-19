function chooseDoor(i){
	//I've written "==" on purpose because the function prompt takes in input as a string, not a number
	if(i == 1) {
		alert("Your prize is a car");
	} else if (i == 2) {
		alert("Your prize is a pencil");
	} else if (i == 3) {
		alert("Your prize is a laptop");
	} else {
		alert("Please choose between 1, 2, and 3");
	}
}

var door = prompt("Which door will you choose? (1, 2, or 3)");
chooseDoor(door);
