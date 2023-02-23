var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function (arg1,arg2){
    console.log('Event is fired');
    console.log(arg1+arg2);
});

//After 2 seconds the event is fired.
setTimeout(function(){
    eventEmitter.emit('myCustomEvent',5,7);
    eventEmitter.emit('myCustomEvent','5','7');
},2000)
// document.getElementById('button').addEventListener('click', function(){