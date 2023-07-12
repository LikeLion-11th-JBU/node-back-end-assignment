const express = require('express')
const api = require('./routers')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)

const { swaggerUi, specs } = require('./swagger.js')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
/**
 * @path {GET} http://localhost:3000/
 * @description 요청 데이터 값이 없고 반환 값이 있는 CET Method
 */

app.listen(3000, function () {
  console.log('Listening on 3000')
})

app.get('/', function (req, res) {
  res.send('Hi')
})
