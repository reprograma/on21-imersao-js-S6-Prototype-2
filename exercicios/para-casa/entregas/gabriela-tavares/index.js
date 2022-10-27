const { Bank } = require("./Bank");
const { Client } = require("./Client");
const { BankAccount } = require("./BankAccount");
const {Person} = require("./Person")

/*Cria objetos do tipo Person, Bank, Client e BankAccount*/

const person1 = new Person("Eloisa", 50288963512);
const person2 = new Person("Anne", 40875489632);

const bank1 = new Bank(304, "Itau", 0.03);
const bank2 = new Bank(305, "Bradesco", 0.05);

const client1 = new Client("Maria", 123896333);
const client2 = new Client("Tais", 896578963);

const newBancAccount1 = new BankAccount(client1, bank2, 012, 0896);
const newBancAccount2 = new BankAccount(client2, bank2, 013, 0897);


/*Chama os métodos addBank e removeBank*/

client1.addBank(bank1)
client1.addBank(bank2)
client2.addBank(bank1)
client2.addBank(bank2)

client1.removeBank(bank1)
client2.removeBank(bank2)


/*Chama os métodos credit, debit, trasferTo, cashWithdrawal e closeAccount*/
newBancAccount1.credit(1500)
newBancAccount2.credit(850)

newBancAccount1.debit(150)
newBancAccount2.debit(300)

newBancAccount1.transferTo(newBancAccount2,150)
newBancAccount2.transferTo(newBancAccount2,20)

newBancAccount1.cashWithdrawal(60)
newBancAccount2.cashWithdrawal(35)

newBancAccount1.closeAccount(bank1)
newBancAccount2.closeAccount(bank2)




