const Bank = require("./bank")
const Client = require('./client')

class BankAccount {
  client
  bank
  accountNumber
  agencyNumber
  #amount = 0
  #qtyWithdrawals24Atm = 0
  #withdrawals24AtmFee = 1.8
  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client) {
      if (bank instanceof Bank) {
        const isclient = client.associatedBanks.find(isClient => isClient.bankCode === bank.bankCode)
        if (isclient) {
          this.client = client
          this.bank = bank
          this.accountNumber = accountNumber
          this.agencyNumber = agencyNumber

        } else {
          throw 'Not a Client of this Bank.'
        }
      } else {
        throw 'Bank is not an instance of Bank.'
      }
    } else {
      throw 'Client is not an instance of Client.'
    }
  }

  get amount() {
    return this.#amount
  }

  set amount(newAmount) {
    return this.#amount = newAmount
  }

  get qtyWithdrawals24Atm() {
    return this.#qtyWithdrawals24Atm
  }

  set qtyWithdrawals24Atm(newQtyWithdrawals24Atm) {
    return this.#qtyWithdrawals24Atm = newQtyWithdrawals24Atm
  }

  get withdrawals24AtmFee() {
    return this.#withdrawals24AtmFee
  }

  set withdrawals24AtmFee(newWithdrawals24AtmFee) {
    return this.#withdrawals24AtmFee = newWithdrawals24AtmFee
  }

  credit(amount) {
    this.amount += amount;
    console.log(`Credit transaction successfully completed.`)
  }

  debit(amount) {
    this.amount -= amount;
    console.log(`Debit transaction successfully completed.`)
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount) {
      if (this.amount < amount) {
        throw 'Error!!! Insufficient balance to perform transaction.';
      }
      if (this.bank !== anotherAccount.bank) {
        let amountWithTax = amount * this.bank.bankTransferFee
        this.debit(amountWithTax);
        console.log(`Origin account balance: $ ${this.amount}`)
        anotherAccount.credit(amount);
        console.log(`Destination account balance: $ ${anotherAccount.amount}`)
      } else if (this.bank === anotherAccount.bank) {
        this.debit(amount);
        console.log(`Origin account balance: $ ${this.amount}`)

        anotherAccount.credit(amount);
        console.log(`Destination account balance: $ ${anotherAccount.amount}`)
      }
    }
    else {
      throw 'Destination account is not an instance of Bank Account.'
    }
  }

  cashWithdrawal(amount) {
    if (this.amount < amount) {
      throw 'Error!!! Insufficient balance to perform transaction.';
    }

    let freeWithdrawalLimit = 3

    if (this.qtyWithdrawals24Atm <= freeWithdrawalLimit) {
      this.qtyWithdrawals24Atm++
      let updatedLimit = freeWithdrawalLimit - this.qtyWithdrawals24Atm
      if (updatedLimit >= 0) {
        this.debit(amount)
        console.log(`\nWithdrawal of $${amount}. Client ${this.client.name} has already made ${this.qtyWithdrawals24Atm} free withdrawal(s). Number of free withdrawals available: ${updatedLimit} . Current Balance: $ ${this.amount}.\n--------------------`)
      } if (updatedLimit === 0) {
        console.log(`Fee of ${this.withdrawals24AtmFee} will be charged on next withdrawal.`);
      }
    }
    if (this.qtyWithdrawals24Atm > freeWithdrawalLimit) {
      let amountWithTax = amount * this.withdrawals24AtmFee
      this.debit(amountWithTax)
      this.qtyWithdrawals24Atm++
      console.log(`\nWithdrawal of $${amount}. Client ${this.client.name} didn't have any free withdrawals available. Fee of ${this.withdrawals24AtmFee} charged on withdrawal. Current Balance: $ ${this.amount}.\n--------------------`)
    }
  }


  closeAccount() {
    if (this.amount > 0) {
      throw 'Account has remaining balance and cannot be closed.'
    } else {
      this.client.removeBank(this.bank)
      console.log('Account successfully closed.')
    }
  }
}

module.exports = BankAccount
