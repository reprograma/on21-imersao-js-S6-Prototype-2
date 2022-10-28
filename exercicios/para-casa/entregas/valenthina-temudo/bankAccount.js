const Client = require('./client');
const Bank = require('./bank');

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #amount = 0;
  #qtyCashWithdrawals24h = 0;
  #withdrawalRate24h = 1.5;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client) {
      if (bank instanceof Bank) {
        const isClientBank = client.associatedBanks.includes(bank);
        if (isClientBank) {
          this.client = client;
          this.bank = bank;
          this.accountNumber = accountNumber;
          this.agencyNumber = agencyNumber;
        }
      } else {
        console.log('Bank must be a instanceof Bank');
      }
    } else {
      console.log('Client must be a instanceof Client');
    }
  }

  get amount() {
    return this.#amount;
  }

  set amount(newAmount) {
    this.#amount = newAmount;
  }

  get qtyCashWithdrawals24h() {
    return this.#qtyCashWithdrawals24h;
  }

  set qtyCashWithdrawals24h(newQtyCashWithdrawals24h) {
    this.#qtyCashWithdrawals24h = newQtyCashWithdrawals24h;
  }

  get withdrawalRate24h() {
    return this.#withdrawalRate24h;
  }

  set withdrawalRate24h(newWithdrawalRate24h) {
    this.#withdrawalRate24h = newWithdrawalRate24h;
  }

  credit(amount) {
    this.#amount += amount;
    console.log(`Deposit successfully of ${amount}. Balance: ${this.#amount}`);
  }

  debit(amount) {
    this.#amount -= amount;
    console.log(
      `Withdrawal successfully of ${amount}. Balance: ${this.#amount}`
    );
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount) {
      if (this.#amount < amount) {
        console.log('Insufficient balance for transfer');
      }
      if (this.bank !== anotherAccount) {
        let homeBankFee = amount * this.bank.transferRate;
        this.debit(homeBankFee);
        anotherAccount.credit(amount);
        console.log(
          `Transfer of ${amount} successfully made to ${anotherAccount}`
        );
      } else if (this.bank === anotherAccount) {
        this.debit(amount);
        anotherAccount.credit(amount);
        console.log(
          `Transfer of ${amount} successfully made to ${anotherAccount}`
        );
      } else {
        console.log('Invalid account');
      }
    }
  }

  cashWithdrawal(amount) {
    let cashWithdrawalFree = 3;
    if (this.qtyCashWithdrawals24h < cashWithdrawalFree) {
      this.debit(amount);
      this.qtyCashWithdrawals24h++;
      console.log(
        `Withdrawal successful. You made ${
          this.#qtyCashWithdrawals24h
        } withdrawals. You still have ${
          cashWithdrawalFree - this.#qtyCashWithdrawals24h
        } free withdrawals.`
      );
    }
    if (this.qtyCashWithdrawals24h > cashWithdrawalFree) {
      let withdrawalFee = this.#withdrawalRate24h * amount;
      this.debit(withdrawalFee);
      console.log(
        `Withdrawal successful. You no longer had free withdrawals. A fee of ${withdrawalFee} was charged for the withdrawal.`
      );
    } else {
      console.log('Insufficient balance.');
    }
  }

  closeAccount() {
    if (this.#amount > 0) {
      console.log(
        'Account still has a balance, it is not possible to close it'
      );
    } else {
      this.client.removeBank(this.bank);
      console.log('Account closed successfully');
    }
  }
}

module.exports = BankAccount;
