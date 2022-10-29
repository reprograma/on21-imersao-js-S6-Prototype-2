const { Bank } = require("./Bank");
const { Client } = require("./Client");
const { BankAccount } = require("./BankAccount");
const { Person } = require("./Person")

const person1 = new Person("Suzana Aguiar", 12345678910);
const person2 = new Person("Larissa Manoela", 11121314151);
//console.log(person1)

const bank1 = new Bank(001, "Brasil", 0.07);
const bank2 = new Bank(002, "NuBank", 0.02);

const client1 = new Client("Beatriz Moema", 112233445);
const client2 = new Client("Marina Leal", 667788991);

const newBancoAccount1 = new BankAccount(client1, bank2, 001, 1011);
const newBancoAccount2 = new BankAccount(client2, bank2, 011, 1213);


/*Chama os métodos addBank e removeBank*/

client1.addBank(bank1)
client1.addBank(bank2)
client2.addBank(bank1)
client2.addBank(bank2)

client1.removeBank(bank1)
client2.removeBank(bank2)


newBancoAccount1.credit(1500)
newBancoAccount2.credit(850)

newBancoAccount1.debit(150)
newBancoAccount2.debit(300)

newBancoAccount1.transferTo(newBancoAccount2,150)
newBancoAccount2.transferTo(newBancoAccount2,20)

newBancoAccount1.cashWithdrawal(60)
newBancoAccount2.cashWithdrawal(35)

newBancoAccount1.closeAccount(bank1)
newBancoAccount2.closeAccount(bank2)