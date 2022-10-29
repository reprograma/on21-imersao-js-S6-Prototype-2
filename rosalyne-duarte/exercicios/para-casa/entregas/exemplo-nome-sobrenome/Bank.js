class Bank{
    codigoBanco;
    nomeBanco;
    #taxaDeTransferencia;

    constructor(codigoBanco, nomeBanco, taxaDeTransferencia){
        this.codigoBanco = codigoBanco;
        this.nomeBanco = nomeBanco;
        this.#taxaDeTransferencia = taxaDeTransferencia;

        this.constructor.bancosCriados.push({
            codigoBanco: this.codigoBanco, 
            qtdClientes: 0
        })
    }

    get taxaDeTransferencia() {
        return this.#taxaDeTransferencia
    }

    static bancosCriados = []
    static totalBancosCriados = 0
}

module.exports = { Bank };