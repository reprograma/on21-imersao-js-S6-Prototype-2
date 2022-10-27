const { Person } = require("./Person");
const { Bank } = require("./Bank");

class Client extends Person {
  relatedBanks = [];

  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (this.relatedBanks.indexOf(bank) === -1) {
        this.relatedBanks.push(bank);

        console.log(`Banco adicionado!`);
      } else {
        console.log(`Possui conta relacionada!`);
      }
    } else {
      {
        console.log("Banco não encontrado");
      }
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      if (this.relatedBanks.indexOf(bank) > -1) {
        const b = this.relatedBanks.filter(
          (e) => e.bankCode != bank.bankCode
        );
        this.relatedBanks = this.relatedBanks.filter((e) => e != bank);
      } else {
        console.log(
          `Você não é associado ao banco, por isso nao pode remove-lo`
        );
      }
    } else {
      throw "Voce nao pode fazer esta ação";
    }
  }
}

module.exports = { Client };
