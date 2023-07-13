const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false,
});

const User = sequelize.define('User', {
  type: Sequelize.STRING,
  unique: true,
});

module.exports = {
  Sequelize,
  sequelize,
  User,
};
