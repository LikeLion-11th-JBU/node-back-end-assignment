const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { swaggerUi, specs } = require('./swagger')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

const user = require('./routes/user.js')
app.use('/user', user)

app.listen('3000', function () {
  console.log('Listening on 3000')
})
