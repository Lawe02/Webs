const http = require('http');
const { listenerCount } = require('process');

const server = http.createServer((req, res) => {
    
    res.end('Hello World');
  });listenerCount(8080);