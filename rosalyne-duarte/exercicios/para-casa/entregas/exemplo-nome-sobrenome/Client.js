const { Bank } = require("./Bank");
const { Person } = require("./Person");

class Client extends Person {
  associatedBanks = [];

  constructor(nome, cpf) {
    super(nome, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      let bankjaAdd = this.associatedBanks.findIndex(
        (banks) => banks.code === bank.code
      );
      if (bankjaAdd != -1) {
        console.error("Cliente já Cadastrada");
      } else {
        this.associatedBanks.push(bank);
        let bankjaAdd = this.associatedBanks.findIndex(
          (banks) => banks.code === bank.code
        );
        Bank.bancosCriados[bankjaAdd].qtdClients++;
      }
    } else {
        return new Error('Não é possivel adicionar tal banco')
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      let bankjaAdd = this.associatedBanks.findIndex(
        (banks) => banks.code === bank.code
      );
      if (bankjaAdd === -1) {
        console.error("Cliente não tem conta nesse banco");
      } else {
        this.associatedBanks.filter((bank) => bank);
        let bankjaAdd = this.associatedBanks.findIndex(
          (banks) => banks.code === bank.code
        );
        Bank.bancosCriados[bankjaAdd].qtdClients--;
      }
    } else {
      console.error("Banco não existe");
    }

    return new Error('Banco inválido')
  }

}

module.exports = { Client };
