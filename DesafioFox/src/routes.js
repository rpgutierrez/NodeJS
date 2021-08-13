const express = require('express');
const UserController = require('./controller/UserController');
const routes = express.Router();

routes.get('/', function(req, res){
    res.json({message: "Backend Mongo"})

})

routes.get('/user', UserController.index)
routes.get('/user/:_id', UserController.busca)
routes.delete('/user/:_id', UserController.deleta)
routes.put('/user', UserController.atualizar)
routes.post('/user', UserController.salvar)

module.exports = routes;