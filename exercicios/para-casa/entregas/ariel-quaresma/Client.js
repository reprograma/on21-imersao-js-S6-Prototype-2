const { Person } = require('./Person')
const { Bank } = require('./Bank')
const { bankNubank } = require('./Bank')
const { bankInter } = require('./Bank')


class Client extends Person{
    associatedBanks = [];
    id;
    constructor(name, id){
        super(name)
        this.id = id;

    }

    addBank(bank){
        if (bank instanceof Bank){
            if (this.associatedBanks.includes(bank)){
                throw 'Este cliente já está associado a esse banco.'
            } else {
                this.associatedBanks.push(bank);
                bank.addClient();
                return console.log("Cliente cadastrado no novo banco com sucesso!")
            }
        } else {
            throw 'Esse não é um banco válido'
        }
    }

    removeBank(bank){
        if (bank instanceof Bank){
            if (this.associatedBanks.includes(bank)){
                let index = this.associatedBanks.indexOf(bank)
                this.associatedBanks.splice(index, 1);
                bank.removeClient();
                return console.log(`Banco ${bank} removido com sucesso!`)
            }
            throw 'Esse cliente não é cliente desse banco.'
        }
        throw 'Esse não é um banco válido'
    }
}

module.exports = {Client, clientAriel, clientVini};