// server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/mushroom-quest')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mushroom-quest/index.html'));
});

app.listen(process.env.PORT || 8080);
