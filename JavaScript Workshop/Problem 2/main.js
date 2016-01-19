function keyDown(event) {
	var key = event.keyCode;
	if(key > 47 && key < 65){
		document.getElementById("results").innerHTML = "NUMBER";
	} else {
		document.getElementById("results").innerHTML = "LETTER";
	}
}