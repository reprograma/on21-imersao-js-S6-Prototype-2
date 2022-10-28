const Person = require('./person');
const Bank = require('./bank');

class Client extends Person {
  associatedBanks = [];

  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (this.associatedBanks.includes(bank)) {
        console.log('You are already a customer at this bank');
      } else {
        this.associatedBanks.push(bank);
        let index = this.associatedBanks.indexOf(bank);
        Bank.banks[index].qtyClientes++;
        console.log(`Bank ${bank.bankCode} added.`);
      }
    } else {
      console.log('Bank is not a instance of Bank class');
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      if (this.associatedBanks.includes(bank)) {
        let index = this.associatedBanks.indexOf(bank);
        this.associatedBanks.splice(index, 1);
        Bank.banks[index].qtyClientes--;
        console.log(`Bank ${bank.bankCode} removed.`);
      } else {
        console.log('You are not a customer at this bank');
      }
    } else {
      console.log('Bank is not a instance of Bank class');
    }
  }
}

module.exports = Client;
