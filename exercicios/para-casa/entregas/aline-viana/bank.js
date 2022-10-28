class Bank {
    codigo;
    nome;
    #taxaDeTransferencia;

    constructor(codigo, nome, taxaDeTransferencia) {
        this.codigo = codigo;
        this.nome = nome;
        this.taxaDeTransferencia = taxaDeTransferencia;
        this.quantidadeDeClients = 0;

        this.constructor.bancosCriados.push({ codigoDoBanco: this.codigo, quantidadeDeClients: this.quantidadeDeClients })
    }
    static bancosCriados = []

}

module.exports = Bank
// console.log(Bank.bancosCriados); // [ ]

// const bank1 = new Bank(100, 'LuaBank', 0.01); 


// console.log(Bank.bancosCriados); 