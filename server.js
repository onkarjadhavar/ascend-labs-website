const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.zip': 'application/zip'
};

const server = http.createServer((req, res) => {
  try {
    const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(urlObj.pathname);
    if (pathname === '/') pathname = '/index.html';

    let filePath = path.join(__dirname, pathname);

    // Support Clean URLs: /internship -> /internship.html
    if (!fs.existsSync(filePath) && !path.extname(pathname)) {
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*'
      });
      const stream = fs.createReadStream(filePath);
      stream.on('error', err => {
        if (!res.headersSent) res.writeHead(500);
        res.end('Server Stream Error');
      });
      stream.pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<!DOCTYPE html><html><body><h1>404 Not Found</h1><p><a href="/">Return to Ascend Labs Home</a></p></body></html>');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error: ' + err.message);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Ascend Labs high-speed server running at http://localhost:${PORT}`);
});
