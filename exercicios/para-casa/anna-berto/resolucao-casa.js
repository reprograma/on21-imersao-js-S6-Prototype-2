const { Person } = require("./Person");
const { BankAccont } = require("./BankAccont");
const { Bank } = require("./Bank");
const { Client } = require("./Client");

const person1 = new Person("Anna 1", "12345678");
const person2 = new Person("Raphaela 2", "1234567899");

const client1 = new Client(person1.name, person1.cpf);
const client2 = new Client(person2.name, person2.cpf);
console.log(client1);
console.log(client2);

// Criando bancos
console.log(Bank.bankCreated);
const bank1 = new Bank(1, "caixa", 10);
const bank2 = new Bank(2, "bradesco", 10);
const bank3 = new Bank(3, "itau", 10);
const bank4 = new Bank(4, "santander", 10);

// testando adicionar e remover banco
client1.addBank(bank1);
client1.addBank(bank2);
client1.addBank(bank3);
client1.addBank(bank4);

client2.addBank(bank1);
client2.addBank(bank2);
client2.addBank(bank3);
client2.addBank(bank4);

client1.removeBank(bank3);

console.log(client1);
console.log(client2);

// testando a soma da quantidade de pessoas em um banco(ainda nao esta pronto)
console.log(Bank.bankCreated);

// testando creditar saldo, tranferir saldo, saque em caixa 24h e encerramento de conta
const bankAccount1 = new BankAccont(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccont(client2, bank1, 11, 222);

bankAccount1.credit(1000);
bankAccount1.transferTo(bankAccount2, 200);
bankAccount1.cashWithdrawal(200);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.closeAccount();
