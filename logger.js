const EventEmitter = require('events')
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

class Logger {
    log(message) {
        //Send an HTTP request
        console.log(__filename)
        console.log(__dirname) 
        console.log(message);
    }
}


//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://'})


module.exports = Logger; 