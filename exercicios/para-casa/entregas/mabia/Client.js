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
        const b = this.relatedBanks.filter((e) => e.bankCode != bank.bankCode);
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

const banco1 = new Bank(100, "Caro", 0.01);
const banco2 = new Bank(200, "Barato", 0.5);

console.log("Dados do banco = `", Bank.bankCreated);
const cliente1 = new Client("Mabia", "123.456.789-01");
const cliente2 = new Client("Rochele", "123.456.789-01");

cliente1.addBank(banco1);
cliente1.addBank(banco2);

cliente2.addBank(banco1);

console.log("bank", cliente2.relatedBanks);

module.exports = { Client };
