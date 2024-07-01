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

async function createUser() {
  await sequelize.sync()

  const user = await User.create({ first_name: 'Jane Doe', email: 'jane.doe@example.com' })
  console.log('User created:', user.toJSON())

  await sequelize.close()
}

createUser()