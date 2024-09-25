const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')

router.post('/', clienteController.cadastrarCliente)

router.get('/', clienteController.buscarClientes)

router.put('/:id', clienteController.atualizarCliente)

router.delete('/:id', clienteController.deletarCliente)

module.exports = router
