const http = require('http');
const url = require('url');
const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('call', () => console.log('Jackpot!!!'));

const hostname = '127.0.0.1';
const port = 3000;

let amount = '0';

const server = http.createServer((req, res) => {

    if (req.url === '/spin') {

        console.log('spinnig...');
        if (amount === 'max') {
            eventEmitter.emit('call');
        } else {
            console.log(`amount lost: ${amount}`);
        }
        amount = '0';

    } else if (req.url.includes('/play')) {

        const query = url.parse(req.url).query;
        amount = query.split('=')[1];

        console.log(`playing...amount: ${amount}`);

    } else {
        console.log('Please, play or spin');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Slot Machine');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});