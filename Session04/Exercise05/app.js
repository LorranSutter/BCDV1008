const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/spin') {
        console.log('spinnig...');
    } else if (req.url === '/play') {
        console.log('playing...');
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