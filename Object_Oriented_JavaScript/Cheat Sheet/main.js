//Literal
var cat = { name: "Whiskers", age: 12, lives: 6 }
console.log(cat.name);

//Constructor
function Country(continent, population){
	this.continent = continent;
	this.population = population;	
}
var america = new Country("North America", 300);
var germany = new Country("Europe", 563);
console.log(america.continent);
console.log(germany.population);

//Object attributes and function attributes
var my_phone = { 
	brand: "Samsung",
	model: function(){
		return "This model is: a " + this.brand + " Galaxy S6 Edge.";
	}	
}
console.log(my_phone.brand);
console.log(my_phone.model());//The model() is very important! It is completely different without the ()

//Prototype
Country.prototype.friendly_population = function() {
	return "This country has " + this.population + " amount of people.";
}
console.log(america.friendly_population());