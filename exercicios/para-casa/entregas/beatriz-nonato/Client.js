const Bank = require('./Bank');
const Person = require('./Person')

class Client extends Person {
    bank = [];
    constructor(name, cpf){
        super(name, cpf)
    }
    
    addBank(bank) {
        if (bank instanceof Bank) {
            if (!this.bank.indexOf(bank)) {
                console.log('Cliente já associado a este Banco')
            } else {
                this.bank.push(bank)
                const indexBank = Bank.createBanks.findIndex(
                    (b) => b.code === bank.code
                    );
                    Bank.createBanks[indexBank].qtdClients++;
                }
            } else {
                throw 'bank precisa ser instância da classe Bank';
            }
        }
        
        removeBank(bank) {
            if (bank instanceof Bank) {
                const auxIndex = this.bank.indexOf(bank);
                if (auxIndex != -1) {
                    this.bank = this.bank.filter((b) => b.code != bank.code);
                    Bank.createBanks[auxIndex].qtdClients--;
                } else {
                    throw 'Cliente não está associado a este Banco';
                }
            } else {
                throw 'bank precisa ser instância da classe Bank';
            }
        }
    }
    
    // const Bank1 = new Bank('000', 'Nubank')
    // const newClient = new Client('Beatriz', '04204487902')
    // newClient.addBank(Bank1)
    // newClient.removeBank(Bank1)
    // console.log(Bank)
    
module.exports = Client;