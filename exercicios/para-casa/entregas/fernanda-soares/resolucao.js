const Bank = require("./Bank.js");
const Client = require("./Client.js");

const bank1 = new Bank(01, "Bank 1", 10); //Bank 1 created.
console.log(Bank.banksCreated); //[ { code: 1, clients: 0 } ]

console.log("\n");

const client1 = new Client("Ana", 12345); //Client Ana created.
client1.addBank(bank1); //Client Ana associated to the bank Bank 1.
console.log(Bank.banksCreated); //[ { code: 1, clients: 1 } ]

console.log("\n");

const client2 = new Client("Jonas", 12345); //Client Jonas created.
client2.addBank(bank1); //Client Jonas associated to the bank Bank 1.
console.log(Bank.banksCreated); //[ { code: 1, clients: 2 } ]

console.log("\n");

client1.removeBank(bank1); //Client Ana dissociated to the bank Bank 1.
console.log(Bank.banksCreated); //[ { code: 1, clients: 1 } ]
