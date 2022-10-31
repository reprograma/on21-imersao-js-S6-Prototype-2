const { Bank } = require("./Bank");
const { Client } = require("./Client");

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #amount = 0;
  #qtdWithdrawal = 0;
  #withdrawalFee = 1.5;
  #qtdTotal24 = 5;
  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client && bank instanceof Bank) {
      this.client = client;
      this.bank = bank;
      this.accountNumber = accountNumber;
      this.agencyNumber = agencyNumber;
    } else {
      console.error('Cliente/Bank deve ser do tipo "Cliente/Bank"');
    }
  }

  get amount() {
    return this.#amount;
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  credit(amount) {
    const newAmount = (this.#amount += amount);
    return `O saldo atual após o crédito é de R$ ${newAmount}`;
  }

  debit(amount) {
    const newDebit = (this.#amount -= amount);
    return `O saldo atual após o saque é de R$ ${newDebit}`;
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount) {
      if (this.#amount < amount) {
        console.error("Não há saldo suficiente para essa operação!");
      } else if (anotherAccount.bank.code != this.bank.code) {
        const tax = this.bank.transferRate * amount;
        const debitWithTax = (this.#amount -= tax);
        anotherAccount.#amount += debitWithTax;
      } else if (anotherAccount.bank.code === this.bank.code) {
        this.#amount -= amount;
        anotherAccount.#amount += amount;
        console.log("Transação realizada com sucesso!");
      }
    } else {
      console.error("Erro na operação!");
    }

    return `Seu saldo atual é de: ${this.#amount}`;
  }

  cashWithdrawal(amount) {
    if (this.#amount >= amount) {
      let numberSaque = this.#qtdWithdrawal + 1;
      if (this.#qtdWithdrawal <= this.#qtdTotal24) {
        let numberOfSaque = this.#qtdTotal24-- - numberSaque;
        let valeuDebit = this.debit(amount);
        console.log(
          `O saldo atual após o saque é de: ${valeuDebit} e o número de saque disponível é de: ${numberOfSaque} `
        );
      }
      if (this.#qtdTotal24 === 0) {
        const saqueWithTax = amount * this.#withdrawalFee;
        this.debit(saqueWithTax);
        console.log(
          `O limite de saques sem cobrança foi esgotado. \nSeu saque com a taxa será ${saqueWithTax}`
        );
      }
    } else {
      console.error("Você não tem saldo suficiente para essa transição!");
    }

    return `Seu saldo atual é de ${this.#amount}`;
  }

  closeAccount() {
    if (this.#amount > 0 && this.#amount < 0) {
      console.log(
        "Não é possivel fechar a conta pois a saldo(positivo/negativo)"
      );
    } else {
      console.log("Conta encerrada com sucesso!");
    }
  }
}

module.exports = { BankAccount };
