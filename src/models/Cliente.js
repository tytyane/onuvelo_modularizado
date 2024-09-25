const mongoose = require("mongoose")

const clienteSchema = new mongoose.Schema({
    nomeCliente: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})

const Cliente = mongoose.model("Cliente", clienteSchema)

module.exports = Cliente