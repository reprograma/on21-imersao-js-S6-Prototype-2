const Bank = require("./bank");
const Person = require("./person");

class Client extends Person {
  listBanks = [];
  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(newBank) {
    if (newBank instanceof Bank) {
      const allBanks = this.listBanks.find((allBanks) => allBanks.code === allBanks.code
      );
      if (!allBanks) {
        this.listBanks.push({ code: newBank.code , name: newBank.bankName });
        
        const numberClients = Bank.createdBanks.findIndex(createdBank => createdBank.code === newBank.code)
        Bank.createdBanks[numberClients].qtyClients++;
        console.log(`Bank associated with success `);
      } else {
        console.log(`This bank is already associated`);
      }
    } else {
      console.log(`Error: The bank must be of type Bank`);
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      const bankAssociated = this.listBanks.findIndex(bankFound => bankFound.code === bank.code);
      if (bankAssociated === -1) {
        console.log('This bank is not associated.');
      } else {
        this.listBanks.splice(bankAssociated, 1)
        Bank.createdBanks[bankAssociated].qtyClients--
        console.log(`Bank successfully disassociated.`);
      }
    } else {
      console.log('Error: The bank must be of type Bank.')
    }
  }

}


module.exports = Client;