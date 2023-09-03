const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

staticPath = path.join(__dirname, 'static')

app.use(express.static(staticPath));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);