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

async function sortPosts() {
  await sequelize.sync()

  const posts = await Post.findAll({
    order: [
      ['title', 'ASC']
    ]
  })
  console.log('Sorted posts:', JSON.stringify(posts, null, 2))

  await sequelize.close()
}

sortPosts()