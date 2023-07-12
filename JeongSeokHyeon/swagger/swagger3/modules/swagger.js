const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', //swaggerDefinition 내 openapi 버전까지 정의해줘야 외부에 정의된 components가 로드가 가능하다.
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test API with express',
    },
    host: 'localhost:3000',
    basePath: '/',
  },
  apis: ['./routes/*.js', './sg/*'],
}

const specs = swaggerJsdoc(options)

module.exports = {
  swaggerUi,
  specs,
}
