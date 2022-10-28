class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #amount = 0;
    #qtdWithdrawal = 0;
    #taxWithdral = 3;
    #qtdWithdrawal24hrs = 4;
    constructor(client, bank, accountNumber, agencyNumber) {
      if (client instanceof Client && bank instanceof Bank) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
      } else if (!(client instanceof Client)) {
        throw "client precisa ser instância da classe Client";
      } else if (!(bank instanceof Bank)) {
        throw "bank precisa ser instância da classe Bank";
      }
    }
  
    credit(amount) {
      this.#amount += amount;
      console.log(`O novo saldo da conta é: R$${this.#amount}`);
    }
  
    debit(amount) {
      this.#amount -= amount;
      console.log(`O novo saldo da conta é: R$${this.#amount}`);
    }
  
    transferTo(anotherAccount, amount) {
      if (anotherAccount instanceof BankAccount && this.#amount >= amount) {
        if (anotherAccount.bank.code === this.bank.code) {
          this.#amount -= amount;
        } else {
          this.#amount = this.#amount - amount - amount * this.bank.transferTax;
        }
  
        anotherAccount.#amount = amount;
        console.log(`O saldo atual da conta de origem é de R$${this.#amount}`);
        console.log(
          `O saldo atual da conta de destino é de R$${anotherAccount.#amount}`
        );
      } else if (!(anotherAccount instanceof BankAccount)) {
        console.log(`Another account não é uma instância de BankAccount`);
      } else if (this.#amount < amount) {
        console.log(
          `Saldo insuficiente para prosseguir operação. Saldo atual: ${
            this.#amount
          }`
        );
      }
    }
}

module.exports = BankAccount;