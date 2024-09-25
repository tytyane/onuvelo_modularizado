const Cliente = require('../models/Cliente')

async function cadastrarCliente(req, res){
    const {nomeCliente, telefone, email} = req.body
    try {
        const novoCliente = new Cliente({nomeCliente, telefone, email})
        const clienteSalvo = await novoCliente.save()
        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso!',
            cliente: clienteSalvo
        })
    } catch(erro){
        res.status(500).json({
            mensagem: "Erro ao cadastrar cliente.",
            erro: erro.message
        })
    }
}

async function buscarClientes(req, res){
    try{
        const clientes = await Cliente.find()
        res.status(200).json(clientes)
    } catch(erro){
        res.status(500).json({
            mensagem: "Erro ao buscar clientes.",
            erro: erro.message
        })
    }
}

async function atualizarCliente(req, res){
    const {id} = req.params
    const {nomeCliente, telefone, email} = req.body
    try{
        const clienteAtualizado = await Cliente.findByIdAndUpdate(
            id,
            {nomeCliente, telefone, email},
            {new: true, runValidators: true}
        )
        if(clienteAtualizado){
            res.status(200).json({
                mensagem: "Cliente atualizado com sucesso!",
                cliente: clienteAtualizado
            })
        } else {
            res.status(404).json("Cliente não encontrado")
        }
    } catch(erro){
        res.status(500).json({
            mensagem: "Erro ao atualizar cliente",
            erro: erro.message
        })
    }
}

async function deletarCliente(req, res){
    const {id} = req.params
    try{
        const clienteDeletado = await Cliente.findByIdAndDelete(id)
        if(clienteDeletado){
            res.status(200).json({
                mensagem: "Cliente deletado com sucesso!",
                cliente: clienteDeletado 
            })
        } else {
            res.status(404).json('Cliente não encontrado')
        }
    } catch(erro){
        res.status(500).json({
            mensagem: "Erro ao deletar cliente",
            erro: erro.message 
        })
    }
}

module.exports = {
    cadastrarCliente,
    buscarClientes,
    atualizarCliente,
    deletarCliente,
}