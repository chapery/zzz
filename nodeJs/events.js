var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('connection', function(){
	console.log(111);
});
eventEmitter.on('connection', function(){
	console.log(222);
});
eventEmitter.emit('connection');
console.log(eventEmitter.listeners('connection').length);