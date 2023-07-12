const Sequelize = require('sequelize') // sequelize 모듈 가져옴.
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
}) // db 연동

const User = sequelize.define('User', {
  name: Sequelize.STRING, // 255길이의 varchar가 생성된다.
}) // User 모델 정의.

module.exports = { Sequelize, sequelize, User }
