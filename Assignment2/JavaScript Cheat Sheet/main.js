//Variables
var a = 3;

//Debugging
console.log("This is what I'll use to debug, since John hates alerts");

//Different data types
var name = "Whiskers"; //String
var age = 42; //Number
var alive = true; //Boolean
var cat = {firstName: "Mr. ", lastName: "Whiskers"}; //Object

//Array
var stray_cats = ["Meow", "Butter", "Carl"];

//Testing
var a = 5;
console.log("This is a test to see if 'a' has changed. Value of a: " + a);

//Functions
function call_cat() {
	console.log("Name of cat is: " + name);
}
function call_age() {
	console.log(a + age);
}
function call_strays() {
	console.log(stray_cats);
}
call_cat(); //must call the function
call_age(); //must call the function
call_strays(); //must call the function