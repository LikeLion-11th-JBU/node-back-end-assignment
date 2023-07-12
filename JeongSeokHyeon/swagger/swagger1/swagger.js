const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'swagger 실습',
      description: '프로젝트 설명:swagger 사용법 학습',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routers/*.js', './routers/user/*.js'], //Swagger 파일 연동
}

const specs = swaggerJsdoc(options)

module.exports = { swaggerUi, specs }
