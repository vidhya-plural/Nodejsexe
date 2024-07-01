const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sakila', 'root', 'Newgoal2024$', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('customer', {
    first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

async function readUsers() {
  await sequelize.sync()

  const users = await User.findAll()
  console.log('All users:', JSON.stringify(users, null, 2))

  await sequelize.close()
}

readUsers()