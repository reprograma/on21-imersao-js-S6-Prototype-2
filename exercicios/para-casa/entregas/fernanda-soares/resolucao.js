const Person = require("./Person.js");
const Bank = require("./Bank.js");
const Client = require("./Client.js");

const bank1 = new Bank(01, "Bank 1", 10);
console.log(Bank.banksCreated);
const client1 = new Client("Ana", 12345);
client1.addBank(bank1);
const client2 = new Client("Jonas", 12345);
client2.addBank(bank1);

client1.removeBank(bank1);
console.log(Bank.banksCreated);
