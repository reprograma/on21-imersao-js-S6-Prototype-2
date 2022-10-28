
const Person = require('./Person');
const Bank = require('./Bank');

class Client extends Person{
   
    banks = [];

constructor(name, cpf){
    super(name, cpf);
}
 
   
   addBank(bank) {
    if (bank instanceof Bank) {
        let indexBank = this.banks.findIndex((banks) => banks.code === bank.code);
        if (indexBank != -1) {
          
         } else {
           this.banks.push(bank);
          let indexBank = this.banks.findIndex((banks) => banks.code === bank.code);
          Bank.createdBanks[indexBank].qtdClients++;
        }
      
      } else {
        console.log(` ${this.name} is already registered in this account`);
      }
  
     
    }
  
    removeBank(bank) {
        if (bank instanceof Bank) {
          let indexBank = this.banks.findIndex(
            (banks) => banks.code === bank.code
          );
          if (indexBank === -1) {
            console.log("there is no account in this bank");
          
          } else {
            this.banks.findIndex((bank) => bank);
            let indexBank = this.banks.findIndex((banks) => banks.code === bank.code
            );
            Bank.createdBanks[indexBank].qtdClients--;
          }
        } else {
          console.log("This bank does not exist");
        }
    
     }
      
      }
  

    

module.exports = Client;







