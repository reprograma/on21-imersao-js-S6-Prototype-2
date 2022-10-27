const Client = require('./Client')
const Bank = require('./Bank')

class BankAccount {
 
    accountNumber;
    agencyNumber;
    #balance = 0;
    #cashWithdrawal24h = 0;
    #cashWithdrawalTax = 0.1;

    constructor(accountNumber, agencyNumber, client, bank){
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;

        if(client instanceof Client){
            this.client = client
        }else{
            throw new Error('Erro no cadastro do cliente.')
        }
        if(bank instanceof Bank && client.banks.includes(bank)){
            this.bank = bank
        }else{
            throw new Error('Cliente não possui vinculo ao banco.')
        }
    }

    get balance() {
        return this.#balance
    }

    set balance(amount) {
        this.#balance = amount
    }

    get cashWithdrawal24h() {
        return this.#cashWithdrawal24h
    }

    set cashWithdrawal24h(amount) {
        this.#cashWithdrawal24h = amount
    }

    credit(amount){
        this.#balance += amount
        console.log(`Depósito realizado. Saldo: ${this.balance}`)
    }

    debit(amount){
        this.#balance -= amount
        console.log(`Saque realizado. Saldo: ${this.balance}`)
    }

    transferTo(anotherAccount, amount){
        if(anotherAccount instanceof BankAccount){
            if(amount > this.balance){
                console.log(`Saldo insuficiente`)
            }else{
                if(this.bank === anotherAccount.bank){
                    anotherAccount.credit(amount)
                    this.debit(amount)
                    console.log(`Tranferencia realizada`)
                }else{
                    const tax = this.#cashWithdrawalTax * amount
                    this.debit(amount + tax)
                    anotherAccount.credit(amount)
                    console.log(`Transferencia de ${amount} realizada + Taxa de ${tax}. Saldo atual: ${this.balance}`)
                }
            }
        }else{
            throw new Error('Conta inválida')
        }
    }

    cashWithdrawal(amount){
        if(this.balance >= amount){
            const cashWithdrawalFree = 2; 

            if(this.cashWithdrawal24h < cashWithdrawalFree){
                this.debit(amount)
                this.#cashWithdrawal24h++
                console.log(`Saque realizado. Saldo atual: ${this.balance}. 
                Você realizou ${this.cashWithdrawal24h} saques em 24h. Poderá realizar ${cashWithdrawalFree - this.cashWithdrawal24h} saques gratuitos ainda hoje.`)
            }else{
                const tax = this.#cashWithdrawalTax * amount
                this.debit(amount + tax)
                console.log(`Saque realizado. Saldo atual: ${this.balance}. 
                Você ultrapassou ${cashWithdrawalFree} saques em 24h. Por isso foi cobrado uma taxa de ${tax} reais`)
            }
        }else{
            console.log("Saldo insuficiente.")
        }
    }

    closeAccount(){
        if(this.balance > 0){
            console.log("Não é possível excluir a conta.")
        }else{
            this.client.removeBank(this.bank)
            console.log('Conta encerrada.')
        }
    }
}

module.exports = BankAccount;