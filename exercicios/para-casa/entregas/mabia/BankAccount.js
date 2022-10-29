const { Client } = require("./Client");
const { Bank } = require("./Bank");

class BankAccont {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #amount = 0;
  #cashier = 0;
  taxcashier;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client) {
      if (bank instanceof Bank) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.taxcashier = 4;
      } else {
        throw "Não é possível realizar esta operação";
      }
    } else {
      throw "Não é possível realizar esta operação";
    }
  }

  credit(amountCredit) {
    this.#amount = this.#amount + amountCredit;
    console.log(
      `Você adicionou R$${amountCredit} e seu saldo é de R$${this.#amount}`
    );
  }

  debit(amountDebit) {
    this.#amount = this.#amount - amountDebit;
    console.log(
      `Você retirou R$${amountDebit} e seu saldo é de R$${this.#amount}`
    );
  }

  transferTo(anotherAccount, amountTransfer) {
    const taxTrasfer = 10;
    if (anotherAccount instanceof BankAccont && this.#amount > amountTransfer) {
      this.#amount = this.#amount - amountTransfer;
      anotherAccount.#amount = anotherAccount.#amount + amountTransfer;

      if (anotherAccount != this.bank) {
        this.#amount = this.#amount - taxTrasfer;
        console.log(`Esta transferencia possui uma taxa de R$ 4`);
      }

      console.log(
        `Transferencias de R$${amountTransfer} realizada com sucesso, saldo disponível = R$${
          this.#amount
        }`
      );

      console.log(
        `O saldo da conta de destino é de R$${anotherAccount.#amount}`
      );
    } else {
      console.log("Saldo nao é suficiente para realizar operação");
    }
  }

  moneyRetreat(amount) {
    if (this.#amount > amount) {
      this.#amount = this.#amount - amount;
      this.#cashier = this.#cashier + 1;
      console.log(`O valor ${amount} foi retirado com sucesso`);

      if (this.#cashier <= 5) {
        console.log(
          `Número de operações realizadas: ${this.#cashier} ainda possui: ${
            5 - this.#cashier
          } retiradas gratuitas`
        );
      }

      if (this.#cashier > 5) {
        this.amount = this.amount - this.taxcashier;
        console.log(`Operação possui uma taxa de R$ ${this.taxcashier}`);
      }
    } else {
      console.log("Saldo insuficiente");
    }
  }

  closeAccount() {
    if (this.amount === 0) {
      console.log("Conta desativada!");
    } else {
      console.log("Náo é possível encerrar a conta com saldo disponível");
    }
  }
}
module.exports = { BankAccont };
