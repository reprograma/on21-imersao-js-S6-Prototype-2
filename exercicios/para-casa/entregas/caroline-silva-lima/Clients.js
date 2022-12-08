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

  removeBank(bank){
    if(!(bank instanceof Bank)){
      throw new Error (`O parâmetro deve ser do tipo Bank / The parameter must be of type Bank`)
    }
    if(!this.associatedBanks.find(b => b.code === bank.code)){
      throw new Error ('O Banco indicado não está associado a esse cliente / The indicated Bank is not associated with this customer')
    }
    else{
      const i = this.associatedBanks.indexOf(bank);
      this.associatedBanks.splice(i,1);
      const cB = Bank.createdBanks.find(b => b.code == bank.code);
      cB.qtyClients -= 1;
      return `Banco ${bank.bankName} removido com sucesso / Bank ${bank.bankName} successfully removed`
    }
  }
};


const clientC = new Client("Camila Ambrósio", "339jjjffjs", "jajajajaja");
console.log(clientC);
const bancoBradesco = new Bank (7, 'Banco Bradesco', 12);
console.log(bancoBradesco);
console.log(clientC.addBank(bancoBradesco));
console.log(Bank.createdBanks);
console.log(clientC.removeBank(bancoBradesco));
console.log(Bank.createdBanks);

module.exports = Client;

