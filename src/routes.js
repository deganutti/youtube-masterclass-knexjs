const express = require('express')
const routes = express.Router()

const IndexController = require('./controllers/IndexController')
const ProdutosController = require('./controllers/ProdutosController')

routes
    // Users
    .get('/', IndexController.index)
    .get('/produtos', ProdutosController.index)
  /*
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    // Projects
    .get('/projects', ProjectController.index)
    .post('/projects', ProjectController.create)
*/

module.exports = routes