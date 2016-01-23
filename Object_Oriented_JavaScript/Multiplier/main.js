function Multiplier(n){
	this.current_value = n;
	this.multiplier = function(s){
		this.current_value = s * this.getCurrentValue();
		return this.current_value;
	}
	this.getCurrentValue = function(){
		return this.current_value;
	}
}

var number = new Multiplier(2);
console.log(number.current_value);
number.multiplier(5);
console.log(number.current_value);