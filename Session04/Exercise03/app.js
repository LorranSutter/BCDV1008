const events = require('events');

const eventEmitter = new events.EventEmitter();
const eventEmitterAlarm = new events.EventEmitter();

const fn = () => console.log('Call me!');
const alarm1 = () => {
    console.log('Alarm has been triggered!')
    eventEmitterAlarm.emit('call2');
};
const alarm2 = () => console.log('Call 911!');

eventEmitter.on('call', fn);
eventEmitterAlarm
    .on('call1', alarm1)
    .on('call2', alarm2);

eventEmitter.emit('call');

eventEmitterAlarm.emit('call1')