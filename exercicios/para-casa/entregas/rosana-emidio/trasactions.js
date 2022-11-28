const Person = require("./person");
const Bank = require("./bank");
const Client = require("./client");
const BankAccount = require('./bankAccount');

const person1 = new Person ('Rodrigo', 35423654)

const bankInter = new Bank(195, 'Inter Bank', 0.4)
const bankItau = new Bank(384, 'Itau Bank', 0.3)
const bankNeon = new Bank(593, 'Neon Bank', 0.8)
const bankBradesco = new Bank(286, 'Bradesco Bank', 0.9)

const client1 = new Client('Osvaldo', 58698625841)
const client2 = new Client('William', 25638265851)
const client3 = new Client('Amanda', 562352266586)
const client4 = new Client('Juliana', 54655286545)



// console.log(Bank.createdBanks);
// client1.addBank(bankInter)
// client2.addBank(bankInter)
// client3.addBank(bankInter)
// console.log(Bank.createdBanks);

// console.log(client1);
// client1.removeBank(bankInter)
// console.log(client1);
// console.log(Bank.createdBanks);

// const bankAccount1 = new BankAccount(client1, bankInter, 2950, 156826-5)
// const bankAccount2 = new BankAccount(client1, bankItau, 2950, 156826-5)

// console.log(bankAccount1);
// console.log(bankAccount1.setCredit(100));
// console.log(bankAccount1.debit(40));
// console.log(bankAccount1.getAmount());
// console.log(bankAccount1.debit(100));

// console.log(bankAccount1.closeAccount());

// console.log(bankAccount1.cashWithdrawal(102));
// console.log(bankAccount1.cashWithdrawal(26));
// console.log(bankAccount1.cashWithdrawal(15));

// console.log(bankAccount2.transferTo(bankAccount1, 150)) //esta com erro: let sumFee = amount * this.bank.fee;