const compileRouter = require('express').Router()

compileRouter.get('/', async (req, res) => {
  res.send('Compile router works')
})

module.exports = compileRouter
