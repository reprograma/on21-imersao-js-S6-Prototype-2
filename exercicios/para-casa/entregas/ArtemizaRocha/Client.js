
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
          Bank.createBanks[indexBank].qtdClients++;
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
            Bank.createBanks[indexBank].qtdClients--;
          }
        } else {
          console.log("This bank does not exist");
        }
    
     }
      
      }
  
const santander = new Bank(320, 'Santander', 2.30);
const itau = new Bank(200, 'Itau', 5.60);
 const cliente1 = new Client('Iza', 22255);
 const cliente2 = new Client('Leyli', 33344);

cliente1.addBank(santander);
cliente1.addBank(itau);
cliente2.addBank(itau);
console.log(cliente2);
console.log(Bank);

cliente2.removeBank(itau);


console.log(cliente1);
console.log(cliente2);
console.log(Bank);
    

module.exports = Client;







