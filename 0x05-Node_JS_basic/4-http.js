const http = require('http');
const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
    const ansText = 'Hello Holberton School!';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', ansText.length);
    res.statusCode = 200;
    res.write(Buffer.from(ansText));
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});

module.exports = app;