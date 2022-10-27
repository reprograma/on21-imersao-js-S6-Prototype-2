class Person {
  name;
  cpf;
  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }
}

class Bank {
  bankCode;
  bankName;
  qtdPersons;
  #transferRate;
  qtdPersons = 0;
  constructor(bankCode, bankName, transferRate) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferRate = transferRate;
    this.constructor.bankCreated.push({
      codBankCreated: this.bankCode,
      qtdPersons: this.qtdPersons,
    });
  }
  static bankCreated = [];
}

class Client extends Person {
  associatedBanks = [];

  constructor(name, cpf) {
    super(name, cpf);
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (this.associatedBanks.indexOf(bank) === -1) {
        this.associatedBanks.push(bank);
        //soma de pessoas ainda nao esta funcionando
        // const newBank = this.associatedBanks.push(bank);
        // Bank.bankCreated[newBank].qtdPersons + 1;
        console.log(`O banco  foi associado com sucesso!`);
      } else {
        console.log(`Você já é associada a esse banco!`);
      }
    } else {
      {
        console.log("Banco não existe");
      }
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      if (this.associatedBanks.indexOf(bank) > -1) {
        const b = this.associatedBanks.filter(
          (e) => e.bankCode != bank.bankCode
        );
        this.associatedBanks = this.associatedBanks.filter((e) => e != bank);
        //soma de pessoas ainda nao esta funcionando
        // Bank.bankCreated[b].qtdPersons--;
      } else {
        console.log(
          `Você não é associado ao banco, por isso nao pode remove-lo`
        );
      }
    } else {
      throw "Voce nao pode fazer esta ação";
    }
  }
}

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

const person1 = new Person("Anna 1", "12345678");
const person2 = new Person("Raphaela 2", "1234567899");

const client1 = new Client(person1.name, person1.cpf);
const client2 = new Client(person2.name, person2.cpf);
console.log(client1);
console.log(client2);

console.log(Bank.bankCreated);
const bank1 = new Bank(1, "caixa", 10);
const bank2 = new Bank(2, "bradesco", 10);
const bank3 = new Bank(3, "itau", 10);
const bank4 = new Bank(4, "santander", 10);

// testando adicionar e remover banco
client1.addBank(bank1);
client1.addBank(bank2);
client1.addBank(bank3);
client1.addBank(bank4);

client2.addBank(bank1);
client2.addBank(bank2);
client2.addBank(bank3);
client2.addBank(bank4);

client1.removeBank(bank3);

console.log(client1);
console.log(client2);

// testando a soma da quantidade de pessoas em um banco(ainda nao esta pronto)
console.log(Bank.bankCreated);

// testando creditar saldo, tranferir saldo, saque em caixa 24h e encerramento de conta
const bankAccount1 = new BankAccont(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccont(client2, bank1, 11, 222);

bankAccount1.credit(1000);
bankAccount1.transferTo(bankAccount2, 200);
bankAccount1.cashWithdrawal(200);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.closeAccount();