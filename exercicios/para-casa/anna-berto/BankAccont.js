const { Client } = require("./Client");
const { Bank } = require("./Bank");

class BankAccont {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #amount = 0;
  #debt24h = 0;
  rateDebt24h;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client) {
      if (bank instanceof Bank) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.rateDebt24h = 10;
      } else {
        throw "Você nao pode fazer esta operação";
      }
    } else {
      throw "Você nao pode fazer esta operação";
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
    const rateTrasfer = 10;
    if (anotherAccount instanceof BankAccont && this.#amount > amountTransfer) {
      this.#amount = this.#amount - amountTransfer;
      anotherAccount.#amount = anotherAccount.#amount + amountTransfer;

      if (anotherAccount != this.bank) {
        this.#amount = this.#amount - rateTrasfer;
        console.log(`Esta transferencia possui uma taxa de R$10`);
      }

      console.log(
        `Foi realizada uma transferencias de R$${amountTransfer}, o saldo da conta de origem é de R$${
          this.#amount
        }`
      );

      console.log(
        `O saldo da conta de destino é de R$${anotherAccount.#amount}`
      );
    } else {
      console.log("Seu saldo nao é suficiente para esta operacao");
    }
  }

  cashWithdrawal(amount) {
    if (this.#amount > amount) {
      this.#amount = this.#amount - amount;
      this.#debt24h = this.#debt24h + 1;
      console.log(`Voce fez uma retirada de ${amount}`);

      if (this.#debt24h <= 5) {
        console.log(
          `Você já fez ${this.#debt24h} ainda tem ${
            5 - this.#debt24h
          } retiradas gratuitas`
        );
      }

      if (this.#debt24h > 5) {
        this.amount = this.amount - this.rateDebt24h;
        console.log(
          `Essa retirada não é gratuita, será cobrada uma taxa de R$${this.rateDebt24h}`
        );
      }
    } else {
      console.log("Você não possui saldo para esta retirada");
    }
  }

  closeAccount() {
    if (this.amount === 0) {
      console.log("Sua conta foi encerrada com sucesso!");
    } else {
      console.log(
        "Voce possui saldo disponível, nao é possivel encerrar sua conta"
      );
    }
    // aqui eu deveria retirar no array de bancos do cliente?
  }
}
module.exports = { BankAccont };
