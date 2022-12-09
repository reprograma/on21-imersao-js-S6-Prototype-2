class Bank{
    codigo;
    nomeBanco;
    #taxaTransf;
    constructor(codigo, nomeBanco, taxaTransf){
        this.codigo = codigo;
        this.nomeBanco = nomeBanco;
        this.#taxaTransf = taxaTransf;        
        this.constructor.createdBanks.push({codigo: codigo, qtdCliente: 0})
    }
    static createdBanks= [];
}


module.exports = Bank;