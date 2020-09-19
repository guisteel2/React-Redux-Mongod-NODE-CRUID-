const express = require('express')

module.exports = function(server){

    // todas da api
    const router = express.Router()
    server.use('/api', router)

    //todo rotas
    const todoService = require('../api/Todo/todoService')
    todoService.register(router, '/todos')
}