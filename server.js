const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end('<h1>Welcome to GyanHub Homepage!</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>About GyanHub</h1><p>This is the about page.</p>');
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
