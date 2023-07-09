const express = require('express');
const app = express();
const port = 3000;

app.get('/users', function (req, res) {
  res.send('user list');
});

app.post('/users', function (req, res) {
  //유저 만들기..
  res.send(user);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
