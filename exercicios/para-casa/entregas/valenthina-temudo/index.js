const Client = require('./client');
const Bank = require('./bank');
const BankAccount = require('./bankAccount');

const client1 = new Client('Nathalia', '123.456.789-00');
const bank1 = new Bank(578, 'PagStar', 1.5);
client1.addBank(bank1);
client1.removeBank(bank1);

const client2 = new Client('Mariane', '987.654.321-00');
client2.addBank(bank1);

const bank2 = new Bank(479, 'BankMoon', 0.9);
client2.removeBank(bank2);

const bankAccount1 = new BankAccount(client1, bank1, 9876, 102);
bankAccount1.credit(2000);
bankAccount1.debit(500);

const bankAccount2 = new BankAccount(client2, bank1, 6478, 105);
bankAccount2.credit(5000);
bankAccount2.debit(1000);

bankAccount2.transferTo(bankAccount1, 500);
bankAccount1.cashWithdrawal(50);
