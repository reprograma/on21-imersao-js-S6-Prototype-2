const { Pessoa } = require('./Pessoa');
const { Banco } = require('./Banco');

class Cliente extends Pessoa {
    bancos;
    constructor(nome, cpf) {
        super(nome, cpf);
        this.bancos = [];
    }

    addBank(banco) {
        if (banco instanceof Banco) {
            if (this.bancos.includes(banco)) {
                return "O cliente já foi associado a este banco";
            }
            this.bancos.push(banco);
            Banco.atualizarQuantidadeClientes(banco);
        }
    }

    removeBank(banco) {
        if (banco instanceof Banco) {
            if (!this.bancos.includes(banco)) {
                return "O cliente não foi associado a este banco";
            }
            let indexBanco = Banco.getIndexBancoCriado(banco, this.bancos);
            this.bancos.splice(indexBanco, 1);
            Banco.atualizarQuantidadeClientes(banco, false);
        }
    }

}

module.exports = { Cliente };

