path = require('path')
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/chart', (req, res) => {
  res.sendFile(path.join(__dirname + '/chart.html'));
})

app.get('/radio', (req, res) => {
  res.sendFile(path.join(__dirname + '/radio.html'));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
