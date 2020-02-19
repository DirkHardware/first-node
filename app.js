const EventEmitter = require('events')
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function(eventArg){
    console.log('Listener', eventArg);
})

const log = require('./logger')
log('message')