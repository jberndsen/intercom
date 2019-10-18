const express = require('express');
const path = require('path');

// initialize exress app
const app = express();
const port = 3000;

// route configuration
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
