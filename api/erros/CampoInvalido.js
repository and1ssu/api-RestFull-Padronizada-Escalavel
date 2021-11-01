class CampoInvalido extends Error {
    constructor (campo){
        const menssagem = `O campo ${campo} está invalido`
        super(menssagem)
        this.name = 'CampoInvalido'
        this.idErro = 1
    }
}

module.exports = CampoInvalido