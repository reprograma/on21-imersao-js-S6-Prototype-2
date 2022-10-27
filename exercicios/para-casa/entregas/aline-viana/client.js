const Person = require('./person')
const Bank = require('./bank')
const { bancosCriados } = require('./bank')

class Client extends Person {
    clienteDeBancos = []
    constructor(nome) {
        super(nome)
    }

    addBank(banco) {
        if (banco instanceof Bank) {
            if (this.clienteDeBancos.includes(banco)) {
                console.log('Você já é cliente deste banco');
            }
            else {
                this.clienteDeBancos.push(banco)
                banco.quantidadeDeClients++
                let index = this.clienteDeBancos.indexOf(banco)
                bancosCriados[index].quantidadeDeClients++
            }
        }
    }
    removeBank(banco) {
        if (this.clienteDeBancos.includes(banco)) {
            let index = this.clienteDeBancos.indexOf(banco)
            this.clienteDeBancos.splice(index, 1)
            banco.quantidadeDeClients--
            bancosCriados[index].quantidadeDeClients--
        }
        else {
            console.log('Você não é cliente deste banco');
        }
    }

}

const client = new Client('Maria', 123); 
console.log(client); 

const bank1 = new Bank(100, 'LuaBank', 0.01);
client.addBank(bank1); 
console.log(client);

client.removeBank(bank1); 
console.log(client); 