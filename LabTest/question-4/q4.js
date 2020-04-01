const moment = require('moment');
const events = require('events');
const emitter = new events.EventEmitter();

const currentTimeCallback = () => {
    console.log(`Current Time: ${moment().format('hh:mm:ss a')}`);
}

emitter.on('currentTime', currentTimeCallback);

emitter.emit('currentTime');