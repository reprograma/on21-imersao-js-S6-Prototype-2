const Bank = require('./Bank')

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #amount = 0;
    #qtyWith = 0;
    #taxPayBank = 3;

    constructor(client, bank, accountNumber, agencyNumber) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    credit(amount) {
        this.#amount += amount;
        // console.log(`Saldo atualizado da conta R$(this.#amount)`)
    }

    debit(amount) {
        this.#amount += amount;
        // console.log(`Novo saldo da  conta R$(this.#amount)`)
    }

    transferTo(anotherAccount, amount){
        if(anotherAccount instanceof BankAccount && this.#amount >= amount){
            if (anotherAccount.bank.code === this.bank.code) {
                this.#amount -= amount;  
            } else {
                this.#amount = this.#amount - amount - (amount * this.bank.transfTax)
            }
            anotherAccount.#amount = amount;
            console.log(`O saldo atual da conta de origem é de R${anotherAccount.#amount}`);
            console.log(`O saldo atual da consta de destino é de R${anotherAccount.#amount}`);
        }else if (!(anotherAccount instanceof BankAccount)){
            console.log(`Another account não é uma instancia de BankAccount`)
        }else if(this.#amount < amount) {
            console.log(`Saldo insuficiente para prosseguir operação. Saldo atual: ${this.#amount}`)
        }

    }
}

const newBankAccount = new BankAccount('Jaqueline', 'Nubank', '0001', '2222')
console.log(newBankAccount)
newBankAccount.credit(500)
newBankAccount.debit(450)

module.exports = BankAccount