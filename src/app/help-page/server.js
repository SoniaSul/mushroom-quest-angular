// server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/your-project-name')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/your-project-name/index.html'));
});

app.listen(process.env.PORT || 8080);
