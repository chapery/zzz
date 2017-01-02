var util = require('util');
function Base(){
	this.name = 'base';
	this.age = 23;
	this.sayHello = function(){
		console.log(this.name);
	}
};
Base.prototype.getAge = function(){
	console.log(this.age);
};

function Sub(){
	this.name = 'sub';
	this.age = 24;
}

util.inherits(Sub, Base);

var myBase = new Base();
var mySub = new Sub();

console.log(util.inspect(myBase, true, 2, true));