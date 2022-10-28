const Person = require("./Person");
const Bank = require("./Bank");
const Client = require("./Client");
const BankAccount = require("./BankAccount");

const person = new Person('Maria Andrade', 78945398640)

const bank = new Bank(100, 'Happy Bank', 0.02);
const bank1 = new Bank(200, 'Taqui Bank', 0.01)
const bank2 = new Bank(300, 'Luna Bank', 0.015)

const client = new Client('Juliane', 73242291077)
const client1 = new Client('Julia', 81712300083)
const client2 = new Client('July', 26765965009)

client.addBank(bank2);
client.addBank(bank);
client.addBank(bank1);

client1.addBank(bank1);
client1.addBank(bank);
client1.addBank(bank2);

client2.addBank(bank2);
client2.addBank(bank);
client2.addBank(bank1);

const bankAccount = new BankAccount(client1, bank2, 234, 9, 0.01);
const bankAccount1 = new BankAccount(client2, bank2, 1050, 100, 0.02);
const bankAccount2 = new BankAccount(client, bank2, 100, 12, 0.015);

bankAccount1.credit(100)
bankAccount2.debit(50)

//console.log('A conta ', bankAccount1.account, ` tem saldo pra transferencia `, bankAccount1.balance)
//console.log('A conta ', bankAccount1.account, ` tem saldo pra transferencia `, bankAccount2.balance)

bankAccount.transferTo(bankAccount1, 50)

//console.log('A conta ', bankAccount1.account, ` ficou com o saldo depois da transferencia de `, bankAccount1.balance)

bankAccount2.cashWithdrawal(100)

bankAccount2.credit(50)
bankAccount2.closeAccount()
bankAccount2.debit(100)
bankAccount1.debit(150)
bankAccount1.closeAccount()
