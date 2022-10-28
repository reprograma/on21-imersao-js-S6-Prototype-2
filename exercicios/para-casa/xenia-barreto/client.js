const Bank = require("./bank");
const Person = require("./person");

class Client extends Person {
  listBanks = [];
  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(newBank) {
    if (newBank instanceof Bank) {
      const allBanks = this.listBanks.find(
        (allBanks) => allBanks.code === allBanks.code
      );
      if (!allBanks) {
        this.listBanks.push({ code: newBank.code , name: newBank.bankName });
        console.log(`Bank associated with success `);
      } else {
        console.log(`This bank is already associated`);
      }
    } else {
      console.log(`Error: The bank must be of type Bank`);
    }
  }

  removeBank(){
    
  }

}



module.exports = Client;
