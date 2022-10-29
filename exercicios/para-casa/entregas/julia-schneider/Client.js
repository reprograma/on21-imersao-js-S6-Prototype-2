const Person = require('./Person')
const Bank = require('./Bank')

class Client extends Person {

    associatedBanks = []

    constructor(name, cpf) {
        super(name, cpf)
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
            Bank.createdBanks[bankAlreadyExists].qtyClient++;
          }
        } else {
          console.error("Banco inválido");
        }
    
        return `AssociatedBanks: ${this.associatedBanks}`;
      }
    
      removeBank(bank) {
        if (bank instanceof Bank) {
          let bankAlreadyExists = this.associatedBanks.findIndex(
            (banks) => banks.code === bank.code
          );
          if (bankAlreadyExists === -1) {
            console.error("Sem conta");
          } else {
            this.associatedBanks.filter((bank) => bank);
            let bankAlreadyExists = this.associatedBanks.findIndex(
              (banks) => banks.code === bank.code
            );
            Bank.createdBanks[bankAlreadyExists].qtyClient--;
          }
        } else {
          console.error("Banco inválido");
        }
    
        return `AssociatedBanks: ${this.associatedBanks}`;
      }
    }


module.exports = Client