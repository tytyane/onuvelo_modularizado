const express = require('express')
const app = express()
const clienteRoutes = require('./routes/clienteRoutes')
const encomendaRoutes = require('./routes/encomendaRoutes')

app.use(express.json())
app.use('/clientes', clienteRoutes)
app.use('/encomenda', encomendaRoutes)

module.exports = app