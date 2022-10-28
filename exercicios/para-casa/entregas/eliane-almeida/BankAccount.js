const Bank = require("./Bank");
const Client = require("./Client")

class BankAccount {
    client;
    bank;
    account;
    agency;
    #balance = 0;
    #withdrawalCashQty = 0;
    #withdrawalFee = 0

    constructor(client, bank, account, agency, withdrawalFee) {
        if(client instanceof Client) {
            this.client = client
        } else {
            throw new Error('Cliente invalido')
            }

        if(bank instanceof Bank) {
            if(client.banks.includes(bank)) {
                this.bank = bank
            } else {
                throw new Error('Você não é um cliente do banco')
            }            
        } else {
            throw new Error('Banco invalido')
        }

        this.account = account;
        this.agency = agency;
        this.#withdrawalFee = withdrawalFee;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        this.balance = amount
    }

    get withdrawalCashQty() {
        return this.#withdrawalCashQty
    }

    set withdrawalCashQty(qty) {
        this.#withdrawalCashQty = qty
    }

    get withdrawalFee() {
        return this.#withdrawalFee
    }

    set withdrawalFee(amount) {
        this.#withdrawalFee = amount
    }

    credit(amount) {
        this.#balance += amount
    }

    debit(amount) {
        if(amount > this.#balance) {
            return 'Saldo insuficiente para saque'
        } else {
            this.#balance -= amount
        }
    }

    transferTo(anotherAccount, amount) {
        if(anotherAccount instanceof BankAccount) {
            if(this.#balance < anotherAccount) {
                throw new Error(' Saldo insuficiente para transferencia')
            } else {
                if(this.bank === anotherAccount.bank) {
                    this.debit(amount)
                    return anotherAccount.credit(amount)
                } else {
                    let tax = amount * this.bank.bankFee
                    this.debit(amount + tax);
                    return anotherAccount.credit(amount)
                }
            }
        } else {
            throw new Error(' A conta não esta vinculado a um banco')
        }
    }

    cashWithdrawal(amount) {
        let freeWithdrawal = 5;
        if(this.#balance > 0 && amount < this.#balance) {
            if(this.#withdrawalFee < freeWithdrawal) {
                this.#withdrawalFee++;
                freeWithdrawal--;
                this.balance -= amount
                console.log(`Valor da retirada ${amount}`)
            } else {
                let fee = amount * this.#withdrawalFee
                this.balance -= (amount + fee)
                console.log(`Valor da retirada ${amount}`)
            }
        } else {
            return 'Saldo insuficiente'
        }
    }

    closeAccount() {
        if(this.#balance > 0) {
            console.log(' Você não pode fechar a conta  pois possui saldo na conta')
        } else {
            this.client.removeBank(this.bank)
            console.log("Conta encerrada com sucesso")
        }
    }
}

module.exports = BankAccount