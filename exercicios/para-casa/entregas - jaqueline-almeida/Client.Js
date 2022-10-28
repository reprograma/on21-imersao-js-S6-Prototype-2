const Bank = require('./Bank');
const Person = require('./Person')


class Client extends Person{
    associateBank = [];

    constructor(name,cpf){
        super(name,cpf)
    }
    addBank(bank){
       if(bank instanceof Bank) {
            if(!this.associateBank.indexOf(bank)) {
                console.log("Esse banco banco já esta associado a esse cliente")
            }else {
                this.associateBank.push(bank)
             const indexBank = Bank.createBanks.findIndex(
                (b) => b.code === bank.code
                );
                Bank.createBanks[indexBank].qtyClients++;
            }
        } else {
            throw "Bank precisa ser a instância da classe"

        }
    }

    removeBank(bank) {
        if (bank instanceof Bank) {
          const auxIndex = this.associateBank.indexOf(bank);
          if (auxIndex != -1) {
            this.associateBank = this.associateBank.filter((b) => b.code != bank.code);
            Bank.createBanks[auxIndex].qtyClients--;
          } else {
            throw "Cliente não possui este banco";
          }
        } else {
          throw "Bank precisa ser instância da classe Bank";
        }
      }
    }

//     removeBank(bank){
//         try{
//             if(this.AssociateBank.includes([bank])){
//                 this.AssociateBank.splice(this.AssociateBank.indexOf(bank))
//            } 
//            else{
//                 throw "Erro ao remover banco!"
//            }

//         } catch(err){
//             if(err == 'Erro'){
//                 console.log('Banco não encontrado')
//             }
//         }
     
//     }
// }

const bancoDoBrasil = new Bank('000', 'Banco do Brasil')
const nubank = new Bank('111', 'Nubank')

const client1 = new Client('Maria', '00000000000')
const client2 = new Client('Flavia', '1111111111')

client1.addBank(bancoDoBrasil);
client1.addBank(nubank);
console.log(client1)

client1.removeBank(bancoDoBrasil);

client2.addBank(bancoDoBrasil);
console.log(client2);
console.log(Bank)

module.exports = Client;