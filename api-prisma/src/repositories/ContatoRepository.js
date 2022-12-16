const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient

module.exports = class ContatoRepository {
    async store(contatos)  {
       const result = await prisma.contatos.createMany({
            data: contatos        
        })
 
        return result; 
    }  
}