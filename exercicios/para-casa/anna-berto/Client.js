const { Person } = require("./Person");
const { Bank } = require("./Bank");

class Client extends Person {
  associatedBanks = [];

  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (this.associatedBanks.indexOf(bank) === -1) {
        this.associatedBanks.push(bank);

        //soma de pessoas ainda nao esta funcionando
        // const newBank = this.associatedBanks.push(bank);
        // Bank.bankCreated[newBank].qtdPersons + 1;
        console.log(`O banco  foi associado com sucesso!`);
      } else {
        console.log(`Você já é associada a esse banco!`);
      }
    } else {
      {
        console.log("Banco não existe");
      }
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      if (this.associatedBanks.indexOf(bank) > -1) {
        const b = this.associatedBanks.filter(
          (e) => e.bankCode != bank.bankCode
        );
        this.associatedBanks = this.associatedBanks.filter((e) => e != bank);
        //soma de pessoas ainda nao esta funcionando
        // Bank.bankCreated[b].qtdPersons--;
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
