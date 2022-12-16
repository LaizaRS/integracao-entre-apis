const ContatoRepository = require ('../repositories/ContatoRepository')

module.exports = class ContatoService {
    store (request) { 
        const contatosRepository = new ContatoRepository();
        const resultado = contatosRepository.store(request);

        if (resultado) {
            return { "code": 200, "message": "Contatos cadastrados com sucesso" } ;
        } 

        return { "code": 400, "message": "Erro ao cadastrar os contatos", "result": resultado}
    }
}