const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// routers 
const compileRouter = require('../api/routers/compile')

require('express-async-errors')

const app = express()

app.use(cors({
  origin: "*"
}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/compile', compileRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app
