const express = require('express')
const router = express.Router()
const encomendaController = require('../controllers/encomendaController')

router.post('/', encomendaController.cadastrarEncomenda)

router.get('/', encomendaController.buscarEncomendas)

router.put('/:id', encomendaController.atualizarEncomenda)

router.delete('/:id', encomendaController.deletarEncomenda)

module.exports = router