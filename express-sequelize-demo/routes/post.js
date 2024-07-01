const express = require('express')
const router = express.Router()
const { Post } = require('./models')

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id)
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({ error: 'Post not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST a new post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(201).json(post)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// PUT update a post by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Post.update(req.body, {
      where: { id: req.params.id }
    })
    if (updated) {
      const updatedPost = await Post.findByPk(req.params.id)
      res.json(updatedPost)
    } else {
      res.status(404).json({ error: 'Post not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Post.destroy({
      where: { id: req.params.id }
    })
    if (deleted) {
      res.status(204).end()
    } else {
      res.status(404).json({ error: 'Post not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router