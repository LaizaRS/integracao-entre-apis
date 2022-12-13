const axios = require('axios');

module.exports = class ContatosService {
    async buscarContatos()  {
        const contatos = await axios.get("https://demo3516307.mockable.io/contatos").then(resp => {
            return resp.data;
        });

        return contatos;
    }

    async removerContatosDuplicados()  {
        const contatos = await this.buscarContatos();
        const contatosFiltrados = [];

        const result = contatos.filter((contato, key, self) =>
            key === self.findIndex((t) => (
                t.email === contato.email && t.celular === contato.celular
            ))
        )
        
        result.forEach((contato) => {
            contatosFiltrados.push({
                nome: contato.nome,
                email: contato.email,
                celular: contato.celular
            })
        })

        return this.enviarContatos(contatosFiltrados);       
    }

    async enviarContatos(contatosFiltrados) {
        const resultado = await axios.post("http://localhost:6666/contatos", contatosFiltrados, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return resultado.data;
    }

}