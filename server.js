const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.url === '/') {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  } else {
    express.static(path.join(__dirname, 'public'))(req, res, next);
  }
});

app.get('*.js', function (req, res, next) {
  res.setHeader('Content-Type', 'text/javascript');
  express.static(path.join(__dirname, '/public'))(req, res, next);
});

app.get('*.css', function (req, res, next) {
  res.setHeader('Content-Type', 'text/css');
  express.static(path.join(__dirname, '/public'))(req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});