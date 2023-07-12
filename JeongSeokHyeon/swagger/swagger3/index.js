const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { swaggerUi, specs } = require('./modules/swagger.js')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.listen('3000', function () {
  console.log('Listening on 3000')
})
