const Person = require('./Person');
const Bank = require('./Bank');

class Client extends Person {

    bancosAssociados;

    constructor(nome, cpf) {
        super(nome, cpf)
        this.bancosAssociados = [];
    }

    addBank(bank) {
        if (bank instanceof Bank) {
            if (this.bancosAssociados.includes(bank)) {
                console.log("Cliente já associado ao banco!");
            } else {
                this.bancosAssociados.push(bank);
                Bank.bancosCriados.push(Bank.bancosCriados[0]++);
            }
        }
    }
    removeBank(bank) {
        if (bank instanceof Bank) {
            if (this.bancosAssociados.includes(bank)) {
                this.bancosAssociados.filter((item) => item != bank);
                Bank.bancosCriados.push(Bank.bancosCriados[0]--);
            } else {
                throw ("O cliente não é associado ao banco!");
            }
        }
    }
}

module.exports = Client;