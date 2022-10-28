const Client = require("./Client");
const Bank = require("./Bank");
const BankAccount = require("./BankAccount");

const client1 = new Client("Cláudia", 123);
const bank1 = new Bank(1, "Bradesco", 0.01);
const bank2 = new Bank(2, "Santander", 0.01);
client1.addBank(bank1);
client1.addBank(bank2);
const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);

bankAccount1.closeAccount();
