const Person = require("./person.js");
const Bank = require("./bank.js")

class Client extends Person {
  associatedBanks = [];
  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    bank instanceof Bank;
    if (this.associatedBanks.length === 0) {
      bank.qtyClients++;
      return this.associatedBanks.push(bank);
    } else {
      if (this.associatedBanks.find((e) => e.code === bank.code)) {
        return "Cliente já é associado deste banco";
      } else {
        bank.qtyClients++;
        return this.associatedBanks.push(bank);
      }
    }
  }

  removeBank(bank) {
    bank instanceof Bank;
    this.associatedBanks = this.associatedBanks.filter(function (element) {
      return element !== bank;
    });

    bank.qtyClients--;

    console.log(`${bank.nameBank} removido da lista de bancos associados`);
  }
}

module.exports = Client;
