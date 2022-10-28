const Client = require("./client");
const Bank = require ("./bank");
const BankAccount = require("./bankAccount");

const bank1 =  new Bank(1, "Bradesco", 0.01);

const cliente2 = new Client("Antonio", 123);

cliente2.addBank(bank1);

//console.log(cliente2);

//cliente2.removeBank(bank1);

const bank2 = new Bank(2, "Santander", 0.01);

 const cliente1 = new Client("Cláudia", 123);

// cliente1.addBank(bank1);
 cliente2.addBank(bank2);
// cliente2.addBank(bank1);
console.log(cliente2);

const bankAccount2 = new BankAccount(cliente2, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
const bankAccount1 = new BankAccount(cliente2, bank2, 1111, 2222); // Instanciação de um objeto BankAccount.

bankAccount2.Credit(1000)
bankAccount2.Debit(200)

 bankAccount2.cashWithdrawal(220)
 bankAccount2.cashWithdrawal(20)
 bankAccount2.cashWithdrawal(20)
bankAccount2.cashWithdrawal(20)
bankAccount2.cashWithdrawal(20)
bankAccount2.cashWithdrawal(20)

console.log('bancoooo' , bankAccount2)
bankAccount2.transferTo(bankAccount1,200)

bankAccount2.closeAccount();
