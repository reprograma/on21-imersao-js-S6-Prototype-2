const Bank = require ("./bank");
const Client = require("./client");
const BankAccount = require("./bankAccount");

const bank1 = new Bank(1, "Bradesco", 0.01);
const bank2 = new Bank(2, "Santander", 0.01);


const cliente1 = new Client("Cláudia", 123);
const cliente2 = new Client("ANTONIO", 123);

cliente1.addBank(bank1);
cliente1.addBank(bank2);
cliente2.addBank(bank1);
cliente1.removeBank(bank1);
 
 
const bankAccount2 = new BankAccount(cliente1, bank2, 1111, 2222); // Instanciação de um objeto BankAccount.
bankAccount2.Credit(1000)
bankAccount2.Debit(10)
bankAccount2.cashWithdrawal(200)
bankAccount2.cashWithdrawal(200)
bankAccount2.cashWithdrawal(200)
bankAccount2.cashWithdrawal(200)
bankAccount2.cashWithdrawal(50)

bankAccount2.closeAccount();
