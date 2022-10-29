const Person = require("./Person");
const Bank = require("./Bank");

class Client extends Person {
  
  associatedBanks = [];
  
  constructor(name, cpf){
    super(name, cpf);
  };

  addBank(bank){
    if(!(bank instanceof Bank)){
      throw new Error (`O parâmetro deve ser do tipo Bank / The parameter must be of type Bank`)
    }
    if(this.associatedBanks.find(b => b.code === bank.code)){
      throw new Error ('O Banco já está associado a esse cliente / The Bank is already associated with this customer')
    }
    else {
      this.associatedBanks.push(bank)
      const cB = Bank.createdBanks.find(b => b.code == bank.code);
      cB.qtyClients += 1;
      return `Banco ${bank.bankName} adicionado com sucesso / Bank ${bank.bankName} successfully added`
    }  
  };
};

module.exports = Client;

