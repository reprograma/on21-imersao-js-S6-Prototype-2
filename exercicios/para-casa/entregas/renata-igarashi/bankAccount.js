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
            throw Error('Invalid instance of client')
        }
        if (bank instanceof Bank) {
            if (client.associatedBanks.includes(bank)) {
                this.bank = bank
            } else {
                throw Error('You are not a customer of this bank')
            }
        } else {
            throw Error('Invalid instance of bank')
        }

        this.account = account
        this.agency = agency
        this.withdrawalAtmTax = withdrawalAtmTax
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
        return this.#withdrawalAtmFee
    }

    credit(amount) {
        console.log(`Deposit: $${this.balance += amount}`)
    }

    debit(amount) {
        if (amount > this.balance) {
            console.log('Insufficient balance for withdrawal')
        } else {
            console.log(`Current Balance: $${this.balance -= amount} / Amount withdrawn: $${amount}`)
        }
    }

    transferTo(anotherAccount, amountToTransfer) {
        if (anotherAccount instanceof BankAccount) {
            if (this.balance < amountToTransfer) {
                throw new Error(`Insufficient funds to transfer! \nYour balance: $${this.balance} / Amount you want to transfer: $${amountToTransfer}`)
            } else {
                if (this.bank === anotherAccount.bank) {
                    this.debit(amountToTransfer)
                    return anotherAccount.credit(amountToTransfer)
                } else {
                    let fee = amountToTransfer * this.bank.transferTax
                    this.debit(amountToTransfer + fee)
                    return anotherAccount.credit(amountToTransfer)
                }
            }
        } else {
            throw Error('Account is not instance of Bank')
        }
    }

    cashWithdrawal(amount) {
        let freeWithdrawalQty = 4
        if (this.balance > 0 && amount < this.balance) {
            if (this.withdrawalAtmQty < freeWithdrawalQty) {
                this.withdrawalAtmQty++
                freeWithdrawalQty -= this.withdrawalAtmQty
                this.balance -= amount
                console.log(`Withdrawal Amount: ${amount} / Current Balance: ${this.balance} / Free Withdrawal Remaining: ${freeWithdrawalQty}`)
            } else {
                let tax = amount * this.withdrawalAtmFee
                this.balance -= (amount + tax)
                console.log(`Withdrawal Amount: ${amount} / Current Balance: ${this.balance} / A 1 % fee will be charged`)
                console.log('')
            }
        } else {
            return 'Insufficient balance'
        }

    }

    closeAccount() {
        if (this.balance > 0) {
            console.log('Unable to close account with balance')
        }
        else {
            this.client.removeBank(this.bank)
            console.log('Account closed successfully')
        }
    }


}

module.exports = BankAccount

//const person1 = new Person('Maria', '12345678900'); // Instanciação de um objeto Person.


// const bank1 = new Bank(133, 'LuaBank', 0.01);
// const bank2 = new Bank(131, 'Nubank', 0.01);
// const bank3 = new Bank(1313, 'Bank3', 0.01)



// const client1 = new Client('Renata', 123)
// const client2 = new Client('Maria', 321)
// const client3 = new Client('Joana', 999)


// client1.addBank(bank1)
// client1.addBank(bank2)



// client2.addBank(bank1)
// client2.addBank(bank2)
// client2.addBank(bank3)

// client3.addBank(bank2)



// const bankAccount1 = new BankAccount(client1, bank2, 133, 13, 0.01)
// const bankAccount2 = new BankAccount(client2, bank3, 1313, 123, 0.01)
// const bankAccount3 = new BankAccount(client2, bank2, 1313, 123, 0.01)
// console.log('CREATED BANKS INIT', Bank.createdBanks)


//CREDIT AND DEBIT
// bankAccount1.credit(500)
// bankAccount1.debit(40)

// TRANSFER TO 
// console.log('BankAccount1 Balance Before Transfer: ', bankAccount1.balance);
// console.log('BankAccount3 Balance Before Transfer: ', bankAccount3.balance);

// bankAccount1.transferTo(bankAccount3, 100)

// console.log('BankAccount1 Balance After Transfer: ', bankAccount1.balance);
// console.log('BankAccount3 Balance After Transfer: ', bankAccount3.balance);

// ==============================

// console.log('BankAccount1 Balance Before Transfer: ', bankAccount1.balance);
// console.log('BankAccount2 Balance Before Transfer: ', bankAccount2.balance);

// bankAccount1.transferTo(bankAccount2, 100)

// console.log('BankAccount1 Balance After Transfer: ', bankAccount1.balance);
// console.log('BankAccount2 Balance After Transfer: ', bankAccount2.balance);
// // console.log(bankAccount1);
// console.log(bankAccount2);

// WITHDRAWAL
// bankAccount1.cashWithdrawal(100)
// bankAccount1.cashWithdrawal(10)
// bankAccount1.cashWithdrawal(50)
// bankAccount1.cashWithdrawal(20)
// bankAccount1.cashWithdrawal(50)


//CLOSE ACCOUNT
// bankAccount1.credit(100)
// bankAccount1.closeAccount()
// bankAccount1.debit(100)
// bankAccount1.closeAccount()

