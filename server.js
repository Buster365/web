const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.substring(1));

    let ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.js') contentType = 'text/javascript';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));

// Route handling for buttons
server.on('request', (req, res) => {
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About GyanHub</h1><p>Welcome to the About page!</p>');
    } else if (req.url === '/services') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Our Services</h1><p>Here are the services we offer!</p>');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact Us</h1><p>Reach us at contact@gyanhub.com!</p>');
    }
});
