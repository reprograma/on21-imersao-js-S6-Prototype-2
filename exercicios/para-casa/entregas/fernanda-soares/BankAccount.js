const Bank = require("./Bank");
const Client = require("./Client");

class BankAccount {
  client;
  bank;
  accountNumber;
  agency;
  #amount = 0;
  #numberOfWithdrawal = 0;
  #maxNumberOfWithdrawal = 3;
  #feeWithdrawal;

  constructor(client, bank, accountNumber, agency, feeWithdrawal) {
    if (client instanceof Client) {
      if (bank instanceof Bank) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agency = agency;
        this.#feeWithdrawal = feeWithdrawal;
        console.log(`New bank account created.`);
      } else return new Error(`Bank is invalid.`);
    } else return new Error(`Client is invalid.`);
  }

  get amount() {
    return `O saldo é de $${this.#amount}`;
  }

  credit(amount) {
    this.#amount += amount;
    console.log(`Crédito realizado. O novo saldo é de $${this.#amount}`);
  }

  debit(amount) {
    this.#amount -= amount;
    console.log(`Débito realizado. O novo saldo é de $${this.#amount}`);
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount) {
      if (amount <= this.#amount) {
        let fee = 0;

        if (this.bank.code !== anotherAccount.bank.code) {
          fee = amount * (this.bank.transferFee / 100);
        }

        this.#amount -= amount + fee;
        anotherAccount.#amount += amount;

        console.log(
          `Transferência realizada. Novo saldo na conta origem: $${
            this.#amount
          } | Novo saldo na conta destino: $${anotherAccount.#amount}`
        );
      } else console.log("Saldo insuficiente para transferência.");
    } else console.log(`Conta inválida.`);
  }

  cashWithdrawal(amount) {
    if (amount < this.#amount) {
      let fee = 0;
      if (this.#numberOfWithdrawal >= this.#maxNumberOfWithdrawal) {
        fee = amount * (this.#feeWithdrawal / 100);
      }

      this.#numberOfWithdrawal++;
      this.#amount -= amount + fee;

      console.log(
        `Quantidade de saques realizados: ${this.#numberOfWithdrawal}`
      );

      const remainingWithdrawal =
        this.#maxNumberOfWithdrawal - this.#numberOfWithdrawal;
      if (remainingWithdrawal >= 0) {
        console.log(`${remainingWithdrawal} saques grátis restando.`);
      } else {
        console.log(`Saque grátis indisponível. Taxa de saque: $${fee}`);
      }
      console.log(`Saque realizado. ${this.amount}`);
    } else {
      console.log(`Saldo insuficiente para o saque.`);
    }
  }

  closeAccount() {
    console.log(this.amount);
    if (this.#amount <= 0) {
      console.log(`Conta fechada.`);
    } else console.log(`Conta não pode ser fechada com saldo positivo.`);
  }
}

const bank1 = new Bank(01, "Bank 1", 10);

const client1 = new Client("Ana", 12345);
const client2 = new Client("Jonas", 12345);

const bankAccount1 = new BankAccount(client1, bank1, 123, 10, 10);
const bankAccount2 = new BankAccount(client2, bank1, 133, 5, 10);

//Testes
console.log("\n");

console.log(bankAccount1.amount); //O saldo é de $0
bankAccount1.credit(200); //Crédito realizado. O novo saldo é de $200
bankAccount1.debit(50); //Débito realizado. O novo saldo é de $150

console.log("\n");

console.log("Transferindo...");
bankAccount1.transferTo(bankAccount2, 20); //Transferência realizada. Novo saldo na conta origem: $130 | Novo saldo na conta destino: $20
bankAccount2.transferTo(bankAccount1, 30); //Saldo insuficiente para transferência.
bankAccount1.transferTo("invalidAccount", 10); //Conta inválida.

console.log("\n");

console.log("Sacando 1...");
console.log(bankAccount1.amount);
bankAccount1.cashWithdrawal(10);
// O saldo é de $130
// Quantidade de saques realizados: 1
// 2 saques grátis restando.
// Saque realizado. O saldo é de $120

console.log("\n");

console.log("Sacando 2...");
console.log(bankAccount1.amount);
bankAccount1.cashWithdrawal(10);
// O saldo é de $120
// Quantidade de saques realizados: 2
// 1 saques grátis restando.
// Saque realizado. O saldo é de $110

console.log("\n");

console.log("Sacando 3...");
console.log(bankAccount1.amount);
bankAccount1.cashWithdrawal(10);
// O saldo é de $110
// Quantidade de saques realizados: 3
// 0 saques grátis restando.
// Saque realizado. O saldo é de $100

console.log("\n");

console.log("Sacando 4...");
console.log(bankAccount1.amount);
bankAccount1.cashWithdrawal(10);
// O saldo é de $100
// Quantidade de saques realizados: 4
// Saque grátis indisponível. Taxa de saque: $1
// Saque realizado. O saldo é de $89

console.log("\n");

console.log("Sacando 5...");
console.log(bankAccount1.amount);
bankAccount1.cashWithdrawal(100);
// O saldo é de $89
// Saldo insuficiente para o saque.

console.log("\n");

console.log(`Fechar conta...`);
bankAccount1.closeAccount();
// O saldo é de $89
// Conta não pode ser fechada com saldo positivo.

bankAccount1.debit(89); //Débito realizado. O novo saldo é de $0

bankAccount1.closeAccount();
// O saldo é de $0
// Conta fechada.
