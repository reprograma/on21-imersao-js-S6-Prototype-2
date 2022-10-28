const Bank=require('./Bank');
const Client=require('./Client');
const Person=require('./Person');
const BankAccount=require('./BankAccount');

const pessoa=new Person("Ana","0031454557754");

const banco1 = new Bank(1111, "itau", 2)
const banco2 = new Bank(2222, "Bradesco", 1)
const banco3 = new Bank(3333, "Santander", 3)
const banco4 = new Bank(4444, "Caixa Econômica", 0.5) 