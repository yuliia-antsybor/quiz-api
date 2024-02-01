const express = require('express')
const cors = require('cors')

const app = express()
const port = 3200

const quizRoutes = require('./routes/quiz')

app.use(cors())
app.use(quizRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Hello1' })
})

app.listen(port, () => {
  console.log('App started')
})
