// express Hello World 예제
var express = require('express')
var app = express()

app.get('/users', function (req, res) {
  res.send('users list')
})

app.post('/users', function (req, res) {
  // create user...
  res.send(user)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
