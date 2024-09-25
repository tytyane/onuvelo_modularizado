const mongoose = require('mongoose')

const encomendaShema = new mongoose.Schema({
    nomeEncomenda: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },
    previsaoEntrega: {
        type: String,
        required: true,
    },
    preco: {
        type: String,
        required: true,
    },
})

const Encomenda = mongoose.model("Encomenda", encomendaShema)

module.exports = Encomenda