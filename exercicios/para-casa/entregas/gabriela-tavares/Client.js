const { Bank } = require("./Bank");
const { Person } = require("./Person");

class Client extends Person {
  associatedBanks = [];
  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      let bankAlreadyExists = this.associatedBanks.findIndex(
        (banks) => banks.code === bank.code
      );
      if (bankAlreadyExists != -1) {
        console.error("Você já é cliente desse banco");
      } else {
        this.associatedBanks.push(bank);
        let bankAlreadyExists = this.associatedBanks.findIndex(
          (banks) => banks.code === bank.code
        );
        Bank.createdBanks[bankAlreadyExists].qtdClients++;
      }
    } else {
      console.error("Esse Banco não existe");
    }

    return `AssociatedBanks: ${this.associatedBanks}`;
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      let bankAlreadyExists = this.associatedBanks.findIndex(
        (banks) => banks.code === bank.code
      );
      if (bankAlreadyExists === -1) {
        console.error("Você não tem conta nesse banco");
      } else {
        this.associatedBanks.filter((bank) => bank);
        let bankAlreadyExists = this.associatedBanks.findIndex(
          (banks) => banks.code === bank.code
        );
        Bank.createdBanks[bankAlreadyExists].qtdClients--;
      }
    } else {
      console.error("Esse Banco não existe");
    }

    return `AssociatedBanks: ${this.associatedBanks}`;
  }
}

module.exports = { Client };
