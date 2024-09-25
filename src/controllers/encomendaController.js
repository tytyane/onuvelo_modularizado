const Encomenda = require('../models/Encomenda')

async function cadastrarEncomenda(req, res){
    const {nomeEncomenda, material, previsaoEntrega, preco} = req.body
    try{
        const novaEncomenda = new Encomenda({nomeEncomenda, material, previsaoEntrega, preco})
        const encomendaSalva = await novaEncomenda.save()
        res.status(201).json({
            mensagem: "Encomenda cadastrada com sucesso!",
            encomenda: encomendaSalva
        }) 
    } catch(erro){
        res.status(500).json({
            mensagem: "Erro ao cadastrar encomenda",
            erro: erro.message
        })
    }
}

async function buscarEncomendas(req, res){
    try{
        const encomendas = await Encomenda.find()
        res.status(200).json(encomendas)
    } catch(erro){
        res.status(500).json({
            mensagem: "Erro ao buscar encomenda",
            erro: erro.message
        })
    }
}

async function atualizarEncomenda(req, res){
    const {id} = req.params
    const {nomeEncomenda, material, previsaoEntrega, preco} = req.body
    try{
        const encomendaAtualizada = await Encomenda.find(
            id,
            {nomeEncomenda, material, previsaoEntrega, preco},
            {new: true, runValidators: true}
        )
        if(encomendaAtualizada){
            res.status(200).json({
                mensagem: "Encomenda atualizada com sucesso!",
                encomenda: encomendaAtualizada
            })
        } else {
            res.status(404).json('Encomenda não encontrada')
        }
    } catch (erro){
        res.status(500).json({
            mensagem: "Erro ao atualizar encomenda",
            erro: erro.message
        })
    }
}

async function deletarEncomenda(req, res){
    const {id} = req.params
    try{
        const encomendaDeletada = await Encomenda.findByIdAndDelete(id)
        if(encomendaAtualizada){
            res.status(200).json({
                mensagem: "Encomenda deletada com sucesso!",
                encomenda: encomendaAtualizada
            })
        } else {
            res.status(404).json('Encomenda não encontrada')
        }
    }catch(erro){
        res.status(500).json({
            mensagem: "Erro ao deletar encomenda",
            erro: erro.message
        })
    }
}

module.exports = {
    cadastrarEncomenda,
    buscarEncomendas,
    atualizarEncomenda,
    deletarEncomenda,
}