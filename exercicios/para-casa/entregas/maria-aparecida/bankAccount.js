class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #disable = false;
    #amount = 0;
    #qtyDrawMoney = 0;
    rateForDraw;
  
    constructor(client, bank, accountNumber, agencyNumber, rateForDraw) {
      this.client = client;
      this.bank = bank;
      this.accountNumber = accountNumber;
      this.agencyNumber = agencyNumber;
      this.rateForDraw = rateForDraw;
    }
  
    credit(amount) {
      this.#amount += amount;
      console.log(`O saldo atual é de R$ ${this.#amount}`);
    }
  
    debit(amount) {
      this.#amount -= amount;
      console.log(`O saldo atual é de R$ ${this.#amount}`);
    }
  
    transferTo(anotherAccount, amount) {
      if (this.#amount < amount) {
        throw "ERRO!!! Você não possui saldo suficiente para realizar essa operação";
      }
  
      this.debit(amount);
      console.log(`O saldo da conta de origem é ${this.#amount}`);
      if (this.bank === anotherAccount.bank) {
        anotherAccount.credit(amount);
        console.log(`O saldo da conta de destino é ${anotherAccount.#amount}`);
      } else {
        anotherAccount.credit(amount - this.rateForDraw);
        console.log(`O saldo da conta de destino é ${anotherAccount.#amount}`);
      }
    }
  
    cashWithdrawal(amount) {
      if (this.#amount >= amount) {
        if (this.#qtyDrawMoney < 2) {
          this.#amount -= amount;
          this.#qtyDrawMoney = this.#qtyDrawMoney + 1;
          if (this.#qtyDrawMoney === 2) {
            return console.log(
              `Resta ${
                2 - this.#qtyDrawMoney
              } saque gratuito, no próximo saque sera cobrado uma taxa no valor de R$5,00 reais `
            );
          } else {
            return console.log(
              `Resta ${2 - this.#qtyDrawMoney} saques gratuitos `
            );
          }
        } else {
          this.#amount -= amount - 5;
          this.#qtyDrawMoney += 1;
          return console.log(`Saque realizado, foi cobrado uma taxa no valor de R$5,00`);
        }
      } else {
        return console.log("O cliente não tem saldo suficiente");
      }
    }
  
    closeAccount() {
      if (this.#amount > 0) {
        return console.log(
          `Não é possível encerrar a conta, pois a mesma ainda possui saldo de ${
            this.#amount
          }`
        );
      } else {
        this.#disable = true;
        return console.log(`Conta desativada`);
      }
    }
  }

  module.exports = BankAccount;
