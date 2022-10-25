const Bank = require("./Bank");
const Client = require("./Client");

module.exports = class BankAccount {
  client;
  bank;
  accountNumber;
  agency;
  #amount = 0;
  #maxWithdrawal = 0;
  #feeWithdrawal;

  constructor(client, bank, accountNumber, agency, feeSaque) {
    if (client instanceof Client) {
      if (bank instanceof Bank) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agency = agency;
        this.#feeSaque = feeSaque;
      } else return new Error(`Bank is invalid.`);
    } else return new Error(`Client is invalid.`);
  }

  get amount() {
    return `The amount is $${this.#amount}}`;
  }

  credit(amount) {
    this.#amount += amount;
    console.log(`The new amount is $${this.#amount}`);
  }

  debit(amount) {
    this.#amount -= amount;
    console.log(`The new amount is $${this.#amount}`);
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount) {
      if (amount <= this.#amount) {
        let fee = 0;

        if (this.bank.code !== anotherAccount.bank.code) {
          console.log("TRANSFER FEE " + this.bank.transferFee);
          fee = amount * (this.bank.transferFee / 100);
        }

        this.debit(amount + fee);
        anotherAccount.credit(amount);

        console.log(
          `New value on origin account: ${this.amount} | New value on destiny account: ${anotherAccount.amount}`
        );
      } else console.log("Amount insufficient to transfer.");
    } else console.log(`Bank account is invalid.`);
  }

  cashWithdrawal(amount) {
    //if(){}
  }
};
