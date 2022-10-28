const Bank = require("./bank.js");
const BankAccount = require("./bankAccount.js");
const Client = require("./client.js");

const bank1 = new Bank(01, "Inter", 20, 0204);
const bank2 = new Bank(02, "Nubank", 21, 0202);
const client1 = new Client("Maria", 0904389243);

client1.addBank(bank1);
client1.addBank(bank2);
client1.removeBank(bank2);

const bankAccount1 = new BankAccount("Maria", "Inter", 2459, 04, 10);
const bankAccount2 = new BankAccount("Theo", "nubanck", 2458, 03, 9);
bankAccount1.credit(223);
bankAccount1.debit(3);
bankAccount1.transferTo(bankAccount2, 120);
bankAccount1.cashWithdrawal(20);
bankAccount1.cashWithdrawal(10);
bankAccount1.cashWithdrawal(20);
bankAccount1.closeAccount();
