// CLASS PERSON
class Person {
  name;
  #cpf;

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }
}

// CLASS BANK
class Bank {
  code;
  name;
  #rate;
  clients = 0;

  constructor(code, name, rate) {
    this.code = code;
    this.name = name;
    this.#rate = rate;

    this.constructor.banks.push(code);
    this.constructor.banks.push(clients);
  }

  static banks = [];
}

console.log(Bank.banks);
const bank1 = new Bank(2346, 'BB', 2);
const bank2 = new Bank(2347, 'BB', 5);
const bank3 = new Bank(2348, 'BB', 8);
console.log(Bank.banks);

// CLASS CLIENT
class Client extends Person {
  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
    }
  }

  removeBank(bank) {}
}

// CLASS BANKACCOUNT
class BankAccount {}
