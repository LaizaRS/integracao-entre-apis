const express = require('express');
const ContatosService = require('../services/ContatosService');

const contatosRoutes = express.Router();

contatosRoutes.get("/sincronizar", async  (request, response) => {
    const contatos = new ContatosService();
    const resultado = await contatos.removerContatosDuplicados();

    response.status(200).send(resultado)
})

module.exports = contatosRoutes
