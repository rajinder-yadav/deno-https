const https = require('https');
const fs = require('fs');

// Read the certificate and private key
const options = {
  key: fs.readFileSync('./ssl/private-key.pem', 'utf8'),
  cert: fs.readFileSync('./ssl/certificate.pem', 'utf8'),
  passphrase: 'hello123' // Replace with your actual passphrase
};

// Create the HTTPS server
https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is an HTTPS server with an encrypted private key!\n');
}).listen(3333, () => {
  console.log('HTTPS server running on port 3333');
});
