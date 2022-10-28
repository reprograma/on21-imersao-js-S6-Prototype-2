const Client = require('./client')
const Bank = require('./bank')

class BankAccount {
    client
    bank
    account
    agency
    #balance = 0
    #withdrawalAtmQty = 0
    #withdrawalAtmFee = 0.01

    constructor(client, bank, account, agency, withdrawalAtmTax) {
        if (client instanceof Client) {
            this.client = client
        } else {
            throw new Error('Erro de cadastro')
        }
        if (bank instanceof Bank) {
            if (client.associatedBanks.includes(bank)) {
                this.bank = bank
            } else {
                throw new Error('Cliente sem vinculo')
            }
        } else {
            throw new Error('Erro cadastro')
        }
    }
    get balance() {
        return this.#balance
    }

    set balance(amount) {
        this.#balance = amount
    }

    get withdrawalAtmQty() {
        return this.#withdrawalAtmQty

    }
    set withdrawalAtmQty(qty) {
        this.#withdrawalAtmQty = qty
    }

    get withdrawalAtmFee() {
        this.#cashWithdrawal24h = amount
    }

    credit(amount) {
        this.#balance += amount
        console.log(`Deposito: $${this.balance}`)
    }

    debit(amount) {
        this.#balance -= amount
        console.log(`Saque feito. Saldo: ${this.balance}`)
    }

    transferTo(anotherAccount, amount){
        if(anotherAccount instanceof BankAccount){
            if(amount > this.balance){
                console.log(`Saldo não suficiente.`)
            }else{
                if(this.bank === anotherAccount.bank){
                    anotherAccount.credit(amount)
                    this.debit(amount)
                    console.log(`Tranferencia feita`)
                }else{
                    const tax = this.#cashWithdrawalTax * amount
                    this.debit(amount + tax)
                    anotherAccount.credit(amount)
                    console.log(`Transferencia realizada ${amount}, Taxa ${tax}. Saldo: ${this.balance}`)
                }
            }
        }else{
            throw new Error('Conta não é válida.')
        }
    }

    cashWithdrawal(amount){
        if(this.balance >= amount){
            const cashWithdrawalFree = 2; 

            if(this.cashWithdrawal24h < cashWithdrawalFree){
                this.debit(amount)
                this.#cashWithdrawal24h++
                console.log(`Saque feito. Saldo: ${this.balance}. 
                O saque foi ultrapassado ${this.cashWithdrawal24h}. Saque gratuito ${cashWithdrawalFree - this.cashWithdrawal24h}.`)
            }else{
                const tax = this.#cashWithdrawalTax * amount
                this.debit(amount + tax)
                console.log(`Saque feito. Saldo: ${this.balance}. 
                O saque foi ultrapassado ${cashWithdrawalFree}. Taxa extra ${tax}.`)
            }
        }else{
            console.log("Saldo não suficiente.")
        }
    }

    closeAccount(){
        if(this.balance > 0){
            console.log("A conta não poderá ser excluida.")
        }else{
            this.client.removeBank(this.bank)
            console.log('A conta foi encerrada.')
        }
    }
}

module.exports = BankAccount