class BankAccount {
    #amount = 0;
    #qtdWithdrawal = 0;
    #qtdWithdrawal24h = 3;
    #taxWithdral = 5;
    
    constructor(client, bank, accountNumber, agencyNumber) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }
    
    credit(amount) {
        this.#amount += amount;
        console.log(`Saldo atualizado da conta: R$${this.#amount}`)
    }
    
    debit(amount) {
        this.#amount -= amount;
        console.log(`Novo saldo da conta: R$${this.#amount}`)
    }
    
    transferTo(anotherAccount, amount) {
        if (anotherAccount instanceof BankAccount && this.#amount >= amount) {
            if (anotherAccount.bank.code === this.bank.code) {
                this.#amount -= amount;
            } else {
                this.#amount = this.#amount - amount - (amount * this.bank.transferTax);
            }
            anotherAccount.#amount = amount;
            console.log(`O saldo atual da conta de origem é de R$${this.#amount}`);
            console.log(
                `O saldo atual da conta de destino é de R$${anotherAccount.#amount}`
                );
            } else if (!(anotherAccount instanceof BankAccount)) {
                console.log(`anotherAccount não é uma instância de BankAccount`);
            } else if (this.#amount < amount) {
                console.log(
                    `Saldo insuficiente para prosseguir operação. Saldo atual: ${
                        this.#amount
                    }`
                    );
                }
    }

    cashWithdrawal(amount) {
        if (this.#amount < amount) {
                    console.log('Saldo insuficiente para saque')
            } else {
                this.qtdWithdrawal24h++
            } if (this.#qtdWithdrawal <= this.#qtdWithdrawal) {
                this.#amount -= amount
            } else {
                this.#amount = this.#amount - amount - (amount * this.bank.transferTax)
            }

            const counter = this.#qtdWithdrawal - this.qtdWithdrawal24h
            let resultDescription = ''

            if (counter > 0) {
                resultDescription = `Você possui ${counter} retiradas gratuitas.`
            } else {
                resultDescription = 'Retiradas gratuitas esgotadas'
            }

            console.log(`As primeiras ${this.qtdWithdrawal24h} retiradas são gratuitas. 
            Retirada realizada. O saldo atual da conta é R$${this.qtdWithdrawal}.
            Total de retiradas realizadas: ${this.qtdWithdrawal} ${resultDescription}`
            )
    }

    closeAccount() {
        if (this.#amount > 0) {
          console.log("A conta não pode ser encerrada, pois ainda existe saldo");
        } else {
          console.log("Conta encerrada com sucesso");
          this.client.removeBank(this.bank);
        }
    }
}

        
module.exports = BankAccount;