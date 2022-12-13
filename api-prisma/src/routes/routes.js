const express = require('express');
const axios = require('axios')
const { v4: uuid_v4, validate } = require('uuid')
const { PrismaClient } = require('@prisma/client')

const contatosRoutes = express.Router();
// const ContatosService = require('../services/ContatosService');

const prisma = new PrismaClient

contatosRoutes.post("", async (request, response) => {
    const contatos = request.body;
   
    result = await prisma.contatos.createMany({
        data: contatos
    })

    if (result) {
        return response.status(200).send("Contatos cadastrados com sucesso")
    }
    
    return response.status(400).json({ "message": "Erro ao cadastrar os contatos", "result": result})

})

module.exports = contatosRoutes