const Person = require("./Person");
const Bank = require("./Bank");

module.exports = class Client extends Person {
  banksAssociated = [];

  constructor(name, cpf) {
    super(name, cpf);
    console.log(`Client ${name} created.`);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      const bankFound = this.banksAssociated.indexOf(bank);

      if (bankFound === -1) {
        this.banksAssociated.push(bank);

        for (let i = 0; i < Bank.banksCreated.length; i++) {
          if (Bank.banksCreated[i].code === bank.code) {
            Bank.banksCreated[i].clients++;
          }
        }

        console.log(`Client ${this.name} associated to the bank ${bank.name}.`);
      } else {
        console.log(`Client already associated with this bank.`);
      }
    } else {
      console.log(`The bank is invalid.`);
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      const bankFound = this.banksAssociated.indexOf(bank);
      if (bankFound !== -1) {
        const index = this.banksAssociated.indexOf(bank);
        this.banksAssociated.splice(index, 1);

        for (let i = 0; i < Bank.banksCreated.length; i++) {
          if (Bank.banksCreated[i].code === bank.code) {
            Bank.banksCreated[i].clients--;
          }
        }

        console.log(
          `Client ${this.name} dissociated to the bank ${bank.name}.`
        );
      } else {
        console.log(`Client already dissociated with this bank.`);
      }
    } else {
      console.log(`The bank is invalid.`);
    }
  }
};
