const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('northwind', 'root', 'Newgoal2024$', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('Employees', {
  // Model attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

// Sync the model with the database
async function syncModel() {
  await User.sync()
  console.log('User model was synchronized successfully.')
}

syncModel()