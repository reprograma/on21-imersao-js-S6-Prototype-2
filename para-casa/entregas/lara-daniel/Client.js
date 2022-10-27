const Person = require('./Person');
const Bank = require('./Bank');

class Client extends Person {
    banks = [];

    constructor(name, cpf){
        super(name, cpf);
    }

    addBank(bank){
        if(bank instanceof Bank){
            if(this.banks.includes(bank)){
                console.log(`Cliente já cadastrado no banco ${bank.name}`)
            }else{
                this.banks.push(bank);
                bank.qtyClient++;
                console.log(`Cliente cadastrado no banco ${bank.name}`)
            }
        }else{
            throw new Error('Banco não cadastrado')
        }
    }

    removeBank(bank){
        if(bank instanceof Bank){
            if(this.banks.includes(bank)){
                let index = this.banks.indexOf(bank)

                this.banks.splice(index);
                bank.qtyClient--;
                console.log(`Removido cadastro do cliente no banco ${bank.name}`)
            }else{
                console.log(`Cliente não cadastrado no banco ${bank.name}`)
            }
        }else{
            throw new Error('Banco não cadastrado')
        }
    }
}

module.exports = Client;