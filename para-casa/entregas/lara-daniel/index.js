const Bank = require('./Bank');
const Client = require('./Client');
const BankAccount = require('./BankAccount');
const Person = require('./Person');

// Instanciação de um objeto Person.
const person1 = new Person('Maria', 12345678900); 
console.log(person1); // { name: 'Maria' }

// A propriedade estática createdBanks é uma array vazia
// antes de nenhum banco ter sido criado:
console.log(Bank.createdBanks); // [ ]

// Instanciação de um objeto Bank.
const bank1 = new Bank(100, 'LuaBank', 0.01); 
console.log(bank1); // { code: 100, name: 'LuaBank', qtyClient: 0 }

// Agora a propriedade estática createdBanks é uma
// array que contém 1 objeto, que corresponde ao banco criado.
// O objeto possui o código do banco e a quantidade de clientes (que inicialmente é 0):
console.log(Bank.createdBanks); // [ { code: 100, qtyClient: 0 } ]

// Instanciação de um objeto Client.
const client1 = new Client('Maria', 123); 
console.log(client1); // { name: 'Maria', banks: [] }

// Adicionando um banco a um cliente
client1.addBank(bank1); // Cliente cadastrado no banco LuaBank
console.log(client1);// { name: 'Maria', banks: [ Bank { code: 100, name: 'LuaBank', qtyClient: 1 } ] }

// Removendo um banco de um cliente
client1.removeBank(bank1); // Removido cadastro do cliente no banco LuaBank
console.log(client1); // { name: 'Maria', banks: [] }

// Instanciação de um objeto BankAccount.
const bankAccount1 = new BankAccount( 1111, 2222, client1, bank1); 
console.log(bankAccount1);
// {
//    accountNumber: 1111,
//    agencyNumber: 2222,
//    client: Client { name: 'Maria', banks: [ [Bank] ] },
//    bank: Bank { code: 100, name: 'LuaBank', qtyClient: 1 }
//  }

// Creditando dinheiro na conta
bankAccount1.credit(1000); // Depósito realizado. Saldo: 1000

// Debitando dinheiro da conta
bankAccount1.debit(300); // Saque realizado. Saldo: 700

//Criando novo cliente, vinculando ao banco
const client2 = new Client('Clara', 1456); // Cliente cadastrado no banco LuaBank
client2.addBank(bank1);
console.log(client2);
// {
//   name: 'Clara',
//   banks: [ Bank { code: 100, name: 'LuaBank', qtyClient: 2 } ]
// }

//Criando uma nova conta para client2
const bankAccount2 = new BankAccount( 3333, 4444, client2, bank1);
console.log(bankAccount2);
// {
//    accountNumber: 3333,
//    agencyNumber: 4444,
//    client: Client { name: 'Clara', banks: [ [Bank] ] },
//    bank: Bank { code: 100, name: 'LuaBank', qtyClient: 2 }
// }

// Transferindo de uma conta para outra
bankAccount1.transferTo(bankAccount2, 200);
//Depósito realizado. Saldo de client2 é 200
// Transferencia realziada. Saldo de client1 é 500

// Retirando no banco 24 horas (cenário de 2 retiradas gratuitas)
bankAccount1.cashWithdrawal(300); // Saque realizado. Saldo atual: 200. Você realizou 1 saques em 24h. Poderá realizar 1 saques gratuitos ainda hoje.
bankAccount1.cashWithdrawal(120); // Saque realizado. Saldo atual: 80. Você realizou 2 saques em 24h. Poderá realizar 0 saques gratuitos ainda hoje.
bankAccount1.cashWithdrawal(30); // Saque realizado. Saldo atual: 47. Você ultrapassou 2 saques em 24h. Por isso foi cobrado uma taxa de 3 reais

// Fechando a conta
bankAccount1.closeAccount(); // Não é possível excluir a conta. (ainda possui saldo)
bankAccount1.cashWithdrawal(45);
bankAccount1.closeAccount(); // Removido cadastro do cliente no banco LuaBank. // Conta encerrada.



