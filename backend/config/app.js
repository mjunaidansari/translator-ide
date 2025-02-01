const express = require('express')
const cors = require('cors')

require('express-async-errors')

const app = express()

app.use(cors({
  origin: "*"
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app
