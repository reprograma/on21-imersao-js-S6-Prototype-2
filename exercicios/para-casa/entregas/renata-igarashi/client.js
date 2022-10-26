const Person = require('./person')
const Bank = require('./bank')
const { createdBanks } = require('./bank')

class Client extends Person {

    associatedBanks = []

    constructor(name, cpf) {
        super(name, cpf)
    }
    addBank(bank) {
        if (bank instanceof Bank) {
            if (this.associatedBanks.includes(bank)) {
                throw new Error('Client already a member of this bank')
            } else {
                this.associatedBanks.push(bank)
                bank.clientQty++
                let index = this.associatedBanks.indexOf(bank)
                createdBanks[index].clientQty++
            }
        } else {
            throw new Error('This is not a bank instance')
        }
    }

    removeBank(bank) {
        if (bank instanceof Bank) {
            if (this.associatedBanks.includes(bank)) {
                this.associatedBanks.push(bank)
                bank.clientQty--
                let index = this.associatedBanks.indexOf(bank)
                createdBanks[index].clientQty--
            } else {
                throw new Error('Bank already removed')
            }
        } else {
            throw new Error('This is not a bank instance')
        }
    }
}

module.exports = Client

// const person1 = new Person('Maria', 12345678900); // Instanciação de um objeto Person.

// console.log('CREATED BANKS INIT', Bank.createdBanks)
// const bank1 = new Bank(100, 'LuaBank', 0.01);
// const bank2 = new Bank(200, 'Nubank', 0.01);
// const bank3 = new Bank(200, 'RSIBank', 0.01);


// const client1 = new Client('Renata', 123)
// const client2 = new Client('Maria', 321)
// const client3 = new Client('Joana', 321)
// const client4 = new Client('Roberta', 321)
// const client5 = new Client('Fernanda', 321)

// client1.addBank(bank1)
// client1.addBank(bank2)
// client1.addBank(bank3)

// client2.addBank(bank1)
// client2.addBank(bank2)
// client2.addBank(bank3)

// client3.addBank(bank1)
// client3.addBank(bank2)

// client4.addBank(bank1)

// client5.addBank(bank1)

// // client1.addBank(bank2)
// console.log('BEFORE REMOVE BANK', Bank.createdBanks)

// // console.log(client1);
// // console.log(client2);
// // console.log(client5);

// client1.removeBank(bank1)
// client1.removeBank(bank2)
// console.log('AFTER REMOVE BANK', Bank.createdBanks)

// client1.removeBank(bank1)
// console.log('AfterRemoveBank:', client1);



