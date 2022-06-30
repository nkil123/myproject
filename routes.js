const route = require("express").Router();
const db = require("./queries")
route.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  route.get('/users', db.getUsers)
  route.get('/users/:id', db.getUserById)
  route.post('/users', db.createUser)
  route.put('/users/:id', db.updateUser)
  route.delete('/users/:id', db.deleteUser)


  module.exports = route;