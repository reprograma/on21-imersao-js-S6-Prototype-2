class Person {
    name;
    cpf;

    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
}

//const person = new Person('Maria Andrade', 78945398640)
//console.log(person)


class Bank {
    code;
    nameBank;
    #bankFee;

    constructor(code, name, bankFee) {
        this.code = code;
        this.name = name;
        this.#bankFee = bankFee;
        this.clientQty = 0;

        this.constructor.createdBanks.push({code: this.code, clientQty: this.clientQty});
    }

    get bankFee() {
        return this.#bankFee
    }

    set bankFee(fee) {
        this.#bankFee = fee
    }

    static createdBanks = []
}

//const bank = new Bank(100, 'Happy Bank', 0.02);
//console.log(bank)


class Client extends Person {
    banks = []

    constructor(name, cpf) {
        super(name, cpf)
    }

    addBank(bank) {
        if(bank instanceof Bank) {
            if(this.banks.includes(bank)) {
                throw new Error('Cliente já possui conta nesse banco')
            } else {
                this.banks.push(bank);
                bank.clientQty++;
                let index = this.banks.indexOf(bank);
                createdBanks[index].clientQty
                }
            } else {
                throw new Error('Este não é um banco')
            }
    }

    removeBank(bank) {
        if(bank instanceof Bank) {
            if(this.banks.includes(bank)) {
                this.banks.push(banck);
                bank.clientQty--;
                let add = this.banks.indexOf(bank);
                createdBanks[add].clientQty--;
            } 
                throw new Error('Banco já está removido')              
        }
            throw new Error('Este não é um banco')
    
    }
}

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
                freeWithdrawal -= this.#withdrawalFee;
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
            console.log(' Você não pode fechar a conta pois possui saldo na conta')
        } else {
            this.client.removeBank(this.bank)
            console.log("Conta encerrada com sucesso")
        }
    }
}

const person = new Person('Maria Andrade', 78945398640)

const bank = new Bank(100, 'Happy Bank', 0.02)
const bank1 = new Bank(200, 'Taqui Bank', 0.01)
const bank2 = new Bank(300, 'Luna Bank', 0.015)

const client = new Client('Juliane', 73242291077)
const client1 = new Client('Juliane', 81712300083)
const client2 = new Client('Juliane', 26765965009)

client.addBank(bank2);
client.addBank(bank);
//client.addBank(bank1);

client1.addBank(bank1);
client1.addBank(bank);
client1.addBank(bank2);

client2.addBank(bank2);
//client2.addBank(bank);
//client1.addBank(bank1);

const bankAccount = new BankAccount(client1, bank2, 234, 9, 0.01);
const bankAccount1 = new BankAccount(client2, bank2, 1050, 100, 0.02);
const bankAccount2 = new BankAccount(client, bank2, 100, 12, 0.015);
console.log("Created Bank INIT", Bank.createdBanks)

bankAccount1.credit(100)
bankAccount2.debit(50)

console.log(`BanckAccount1 tem saldo pra transferencia`, bankAccount1.balance)
console.log(`BanckAccount1 tem saldo pra transferencia`, bankAccount2.balance)

bankAccount.transferTo(bankAccount1, 50)

console.log(`BanckAccount1 ficou com o saldo depois da transferencia`, bankAccount1.balance)

bankAccount2.cashWithdrawal(100)

bankAccount2.credit(50)
bankAccount2.closeAccount()
bankAccount2.debit(100)
bankAccount1.closeAccount()


/**

export default Person
*/
