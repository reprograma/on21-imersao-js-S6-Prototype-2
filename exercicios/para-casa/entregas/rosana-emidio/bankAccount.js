const Client = require("./client");
const Bank = require("./bank");

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #amount = 0;
  #withdrawals = 0;
  #withdrawalsFee = 0.3;

  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client) {
      if (bank instanceof Bank) {
        const foundClient = client.listBanks.find(
          (foundClient) => foundClient.code === bank.code
        );
        if (foundClient) {
          this.client = client;
          this.bank = bank;
          this.accountNumber = accountNumber;
          this.agencyNumber = agencyNumber;
        } else {
          console.log("Error: Client not found.");
        }
      } else {
        console.log("Error: The bank must be of type Bank.");
      }
    } else {
      console.log("Error: The client must be of type Client.");
    }
  }

  getAmount() {
    return this.#amount;
  }

  setCredit(amount) {
    return (this.#amount += amount);
  }

  debit(amount) {
    if (this.#amount < amount) {
      return console.log("Insufficient balance");
    } else {
      this.#amount -= amount;
    }
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof BankAccount) {
      if (this.#amount < amount) {
        console.log("Insufficient balance for this transaction");
      }
      if (this.bank !== anotherAccount.bank) {
        let sumFee = amount * this.bank.fee;
        let debitAmount = (amount += sumFee);
        this.debit(debitAmount);
        return this.getAmount();
      } else if (this.bank === anotherAccount.bank) {
        this.debit(amount);
        console.log("Debit made to source account");

        anotherAccount.credit(amount);
        console.log(`Credit sent for destination account`);
        anotherAccount.getAmount();
      }
    }
  }

  cashWithdrawal(amount) {
    const freeFeeLimit = 2

    if(this.#withdrawals <= freeFeeLimit){
      this.#withdrawals++
      let newFreeFeeLimit = freeFeeLimit - this.#withdrawals
      
      if(newFreeFeeLimit >= 0){
        this.debit(amount)
        console.log('Withdrawal 24hrs with free Fee, completed successfully.');
      }
    }
    if(this.#withdrawals > freeFeeLimit){
      let addFee = amount * this.#withdrawalsFee
      this.debit(addFee)
      this.#withdrawals++
      console.log('Withdrawal for a fee');
    }

    // A cada retirada realizada, informe ao cliente quantas retiradas ele já realizou e se ainda possui retiradas gratuitas.
    // Se sim, informe quantas.
    // Se não, informe a taxa que será cobrada a cada retirada.
    
  }

  closeAccount() {
    if (this.#amount > 0) {
      return console.log(
        "Need to withdraw the available balance to close the account."
      );
    } else {
      this.client.removeBank(this.bank);
      return console.log("Account closed");
    }
  }
}

module.exports = BankAccount;
