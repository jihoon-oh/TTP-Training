//Define object School
function School(name, population){
	this.name = name;
	this.population = population;
}
//Add functions to this object
School.prototype.addPopulation = function(){
	return this.population++;
}
School.prototype.myPopulation = function(){
	return "This school's population is " + this.population + ".";
}
//Make an instance of the object School
var mySchool = new School("Queens College", 1923);

//Define object Person
function Person(name, age){
	this.name = name;
	this.age = age;
	mySchool.addPopulation(); //Everytime a person is created, add to the population of ths school
}
//Add functions to this object
Person.prototype.myName = function(){
	return "My name is " + this.name + ".";
}
Person.prototype.myAge = function(){
	return "My age is " + this.age + ".";
}

//Define object Teacher
function Teacher(name, age, subject){
	this.name = name;
	this.age = age;
	this.subject = subject;
}
//Teacher extends the object Person
Teacher.prototype = new Person(this.name, this.age);
//Add functions to this object
Teacher.prototype.mySubject = function(){
	return "I teach " + this.subject + ".";
}
//Make an instance of this object
var myTeacher = new Teacher("Will", 39, "Math");
//Output attributes of this instance
console.log(myTeacher.myName());
console.log(myTeacher.myAge());
console.log(myTeacher.mySubject());

//Define object Student
function Student(name, age, gpa){
	this.name = name;
	this.age = age;
	this.gpa = gpa;
}
//Student extends the object Person
Student.prototype = new Person(this.name, this.age);
//Add functions to this object
Student.prototype.myGPA = function(){
	return "My GPA is " + this.gpa + ".";
}
//Make an instance of this object
var myStudent = new Student("James", 21, 3.5);
//Output attributes of this instance
console.log(myStudent.myName());
console.log(myStudent.myAge());
console.log(myStudent.myGPA());

//Output the final population of this school
console.log(mySchool.myPopulation());