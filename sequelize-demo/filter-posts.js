const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sakila', 'root', 'Newgoal2024$', {
  host: 'localhost',
  dialect: 'mysql'
})

const Post = sequelize.define('film', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

async function filterPosts() {
  await sequelize.sync()

  const posts = await Post.findAll({
    where: {
      title: 'HUNGER ROOF'
    }
  })
  console.log('Filtered posts:', JSON.stringify(posts, null, 2))

  await sequelize.close()
}

filterPosts()