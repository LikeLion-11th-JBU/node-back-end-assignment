// 사용자 목록 조회 API
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const user = require('./api/user/index')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', user)

app.listen(port, function () {
  console.log('Example app listening on port ${port}')
})

module.exports = app
