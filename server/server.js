const http = require('http');
const fs = require('fs');
const path = require('path');

const connection = {
    host: 'localhost',
    port: '8003'
};

const publicFolderPath = `${__dirname}/../public`;

const server = http.createServer((req, res) => {
    let requestURL = req.url;
    if (requestURL === '/') {
        requestURL = '/index.html';
    }
    const requestedResource = path.normalize(publicFolderPath + requestURL);
    fs.readFile(requestedResource, (err, data) => {
        if (err) {
            res.statusCode = 404;
        } else {
            res.statusCode = 200;
            res.setHeader = ('Content-Type', 'text/html');
            res.write(data);
        }
        res.end();
    });
});

server.listen(connection.port, connection.host, () => {
    console.log(`Server running on ${connection.host}:${connection.port}`);
});