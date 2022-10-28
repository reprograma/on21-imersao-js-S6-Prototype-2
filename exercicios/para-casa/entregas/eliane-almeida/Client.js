const Person = require("./Person")
const Bank = require("./Bank");

class Client extends Person {
    banks = []

    constructor(name, cpf) {
        super(name, cpf)
    }

    addBank(bank) {
        if(bank instanceof Bank) {
            if(this.banks.includes(bank)) {
                throw new Error('Cliente já possui conta nesse banco')
            } else {
                this.banks.push(bank);
                bank.clientQty++;
                let index = this.banks.indexOf(bank);
                Bank.createdBanks[index].clientQty++
                }
            } else {
                throw new Error('Este não é um banco')
            }
    }

    removeBank(bank) {
        if(bank instanceof Bank) {
            if(this.banks.includes(bank)) {
                this.banks.push(bank);
                bank.clientQty--;
                let add = this.banks.indexOf(bank);
                Bank.createdBanks[add].clientQty--;
            } else {
                throw new Error('Banco já está removido')   
            }           
        } else {
            throw new Error('Este não é um banco')
        }
    
    }
}

module.exports = Client