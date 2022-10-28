class Bank{
    codigo;
    nome;
    #txTransferencia;
    constructor(codigo,nome, txTransferencia){
        this.nome = nome;
        this.codigo=codigo;
        this.#txTransferencia = txTransferencia;
        this.constructor.createBank.push({ code: codigo, qtdClients: 0 });
        
    }

    get txTransferencia() {return this.#txTransferencia ;}

    static createBank = [];
}

module.exports = Bank;