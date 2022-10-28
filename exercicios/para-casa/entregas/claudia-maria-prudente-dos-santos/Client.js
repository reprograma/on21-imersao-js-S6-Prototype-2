const Bank = require("./Bank");
const Person = require("./Person");

class Client extends Person {
  banks = [];
  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (this.banks.indexOf(bank) != -1) {
        console.log("este banco já está associado a este cliente");
      } else {
        this.banks.push(bank);
        const indexBank = Bank.createdBanks.findIndex(
          (b) => b.code === bank.code
        );
        Bank.createdBanks[indexBank].qtdClients++;
        console.log("Banco adicionado ao cliente");
      }
    } else {
      throw "bank precisa ser instância da classe Bank";
    }
  }
  removeBank(bank) {
    if (bank instanceof Bank) {
      const auxIndex = this.banks.indexOf(bank);
      if (auxIndex != -1) {
        this.banks = this.banks.filter((b) => b.code != bank.code);
        Bank.createdBanks[auxIndex].qtdClients--;
        console.log("Banco removido do cliente");
      } else {
        throw "cliente não possui este banco";
      }
    } else {
      throw "bank precisa ser instância da classe Bank";
    }
  }
}

module.exports = Client;
