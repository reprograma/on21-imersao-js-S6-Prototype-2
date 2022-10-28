const Bank = require('./Bank');
const Client = require('./Client');


class BankAccount {
client;
bank;
accountNumber;
agencyNumber;
#amount = 0;
#qtdWithdrawal = 0 ;
#taxWithdrawal = 0;

constructor(client, bank, accountNumber, agencyNumber,){
this.client = client;
this.bank = bank;
this.accountNumber = accountNumber;
this.agencyNumber = agencyNumber;

}

credit(amount){
    this.#amount += amount;
    console.log(`Saldo atual da conta: ${this.#amount}}`);

}

debit(amount){
   this.#amount -=amount;
   console.log(`Novo Saldo ${this.#amount}`);
}



}

const BankAccount1 = new BankAccount('Miza', 'C6bank', '0002', '56120')
console.log(BankAccount1);
BankAccount1.credit(300);
BankAccount1.debit(250)


module.exports = BankAccount;