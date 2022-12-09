const Bank = require('./Bank');
const Person = require('./Person');

class Client extends Person{
    banco = [];
    constructor(nome, cpf){
        super(nome, cpf)
    }
    static clients = [];

    addBank(bank){
        if(bank instanceof Bank){
            if(!this.banco.indexOf(bank)){
                console.log(`Cliente associado ao banco ${bank}`)
            }else {
                this.banco.push(bank);                
                const indexBank = Bank.createdBanks.findIndex(
                    (b) => b.codigo === bank.codigo
                );
                Bank.createdBanks[indexBank].qtdCliente++;
            }
        } else {
            throw "bank precisa ser instância da classe Bank";
            
        }
    }
    
    removeBank(banks){
        if (banks instanceof Bank) {
            const auxIndex = this.banco.indexOf(banks);
            if (auxIndex != -1) {
              this.banco = this.banco.filter((b) => b.codigo != banks.codigo);
              Bank.createdBanks[auxIndex].qtdClients--;
            } else {
              throw "cliente não possui este banco";
            }
          } else {
            throw "bank precisa ser instância da classe Bank";
          }
        }
}

const nubank = new Bank(260, 'nuBank', 5.60);
const bradesco = new Bank(500, 'bradesco', 4.88);
const cliente1 = new Client('Ana', 111222);
const cliente2 = new Client('Maria', 22233);

cliente1.addBank(nubank);
cliente1.addBank(bradesco);
cliente2.addBank(bradesco);
console.log(cliente2);
console.log(Bank);

cliente2.removeBank(bradesco);


console.log(cliente1);
console.log(cliente2);
console.log(Bank);

module.exports = Client;