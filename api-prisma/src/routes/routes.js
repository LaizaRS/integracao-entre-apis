const express = require('express');
const axios = require('axios')
const { v4: uuid_v4, validate } = require('uuid')
const { PrismaClient } = require('@prisma/client');
const ContatosService = require('../services/ContatoServices');

const contatosRoutes = express.Router();

contatosRoutes.post("", (request, response) => {

    const contatos = new ContatosService();
    const resultado = contatos.store(request.body);

    response.status(resultado.code).json(resultado)
})

module.exports = contatosRoutes