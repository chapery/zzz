var index = {};
index.name = 'chen';
index.say = function(){
	console.log(this.name);
};
index.say();