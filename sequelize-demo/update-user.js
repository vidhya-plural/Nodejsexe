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

async function updateUser() {
  await sequelize.sync()

  const user = await User.findOne({ where: { email: 'jane.doe@example.com' } })
  if (user) {
    user.name = 'Jane Smith'
    await user.save()
    console.log('User updated:', user.toJSON())
  }

  await sequelize.close()
}

updateUser()