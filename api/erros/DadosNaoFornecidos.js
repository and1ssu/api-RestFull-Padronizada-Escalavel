class DadosNaoFornecidos extends Error {
    constructor (campo){
        
        super('Não Foram Fornecidos dados pra atualizar!')
        this.name = 'DadosNaoFornecidos'
        this.idErro = 2
    }
}

module.exports = DadosNaoFornecidos