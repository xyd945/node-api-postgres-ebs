const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const service = require('./service')
require('dotenv').config()
const port = process.env.APP_PORT

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: `Node.js, Express, and REST API to ${process.env.BASE_URL}` })
})

app.get('/users', service.getUsers)
app.get('/users/:id', service.getUserById)
app.post('/users', service.createUser)
app.put('/users/:id', service.updateUser)
app.delete('/users/:id', service.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})