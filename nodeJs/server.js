function alert(){
	this.name = 'jack';
	this.say = function(){
		console.log(111);
	}
}
module.exports = alert;