const { Client } = require('./Client');
const { Bank } = require('./Bank');
const { clientVini } = require('./Client')
const { clientAriel } = require('./Client')
const { bankInter } = require('./Bank')
const { bankNubank } = require('./Bank')

class BankAccount {
    client;
    bank;
    idCount;
    idBankBranch;
    isAccountOpen;
    #taxIn24hBanks;
    #balance = 0;
    #withdrawIn24hBanks = 0;
    #withdrawLimitIn24hBanks = 2;

    constructor(client, bank, idCount, idBankBranch, taxIn24hBanks) {
        if (client instanceof Client) {
            if (bank instanceof Bank) {
                if (client.associatedBanks.filter(e => e.name == bank.name).length > 0) {
                    this.client = client;
                    this.bank = bank;
                    this.idCount = idCount;
                    this.idBankBranch = idBankBranch;
                    this.#taxIn24hBanks = taxIn24hBanks;
                    this.isAccountOpen = true;
                } else {
                    throw 'Essa pessoa não é cliente desse banco.'
                }
            } else {
                throw 'Esse não é um banco válido'
            }
        } else {
            throw 'Esse não é um cliente válido'
        }
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    get bank() {
        return this.bank;
    }

    get withdrawIn24hBanks() {
        return this.#withdrawIn24hBanks;
    }

    set withdrawIn24hBanks(newWithdrawals) {
        this.#withdrawIn24hBanks = newWithdrawals;
    }

    get withdrawLimitIn24hBanks() {
        return this.#withdrawLimitIn24hBanks;
    }

    set withdrawLimitIn24hBanks(newLimit) {
        this.#withdrawLimitIn24hBanks = newLimit;
    }

    get taxIn24hBanks() {
        return this.#taxIn24hBanks;
    }

    set taxIn24hBanks(newTax) {
        this.#taxIn24hBanks = newTax;
    }

    get isAccountOpen() {
        return this.isAccountOpen;
    }

    set isAccountOpen(newStatus) {
        if (newStatus.typeOf == "boolean") {
            this.isAccountOpen = newStatus;
        } else {
            throw 'Needs to be a boolean'
        }
    }

    credit(amount) {
        this.balance = this.balance + amount;
        return console.log(`Seu novo saldo é ${this.balance}`)
    }

    debit(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount
            return console.log(`Seu novo saldo é ${this.balance}`)
        } else {
            throw 'Saldo insuficiente'
        }
    }

    transferTo(anotherAccount, amount) {
        if (anotherAccount instanceof BankAccount) {
            if (this.bank != anotherAccount.bank) {
                let amountTax = this.bank.tax * amount;
                this.debit(amountTax + amount);
                anotherAccount.credit(amount);
                return console.log(`Transferência realizada com sucesso e com taxa!`)
            } else {
                this.debit(amount);
                anotherAccount.credit(amount);
                return console.log(`Transferência realizada com sucesso e sem taxas!`)
            }
        }
        throw `Essa conta não existe em nenhum banco`
    }

    cashWithdrawal(amount) {
        this.withdrawIn24hBanks += 1;
        let remainingWithdrawals = this.withdrawLimitIn24hBanks - this.withdrawIn24hBanks;

        if (this.withdrawIn24hBanks <= this.withdrawLimitIn24hBanks) {
            this.debit(amount);
            if (remainingWithdrawals > 0) {
                return console.log(`Saque feito gratuitamente! Você ainda possui ${remainingWithdrawals}`);
            } else {
                return console.log(`Saque feito gratuitamente! Você não possui mais saques gratuitos disponíveis,
                a partir do próximo será cobrado taxa de ${this.taxIn24hBanks}`);
            }
        } else {
            this.debit(amount + this.taxIn24hBanks);
            return console.log(`Saque realizado com taxa de ${this.taxIn24hBanks}`);
        }
    }

    closeAccount() {
        if (this.balance == 0) {
            this.isAccountOpen = false;
            return console.log(`Conta encerrada!`);
        } else {
            throw 'Sua conta não pode ser encerrada com saldo diferente de 0'
        }
    }
}

const viniAccount = new BankAccount(clientVini, bankNubank, 1, 456, 0.05);
const arielAccount = new BankAccount(clientAriel, bankInter, 2, 457, 0.1);

viniAccount.credit(450);
viniAccount.debit(50);

console.log(viniAccount.balance);
viniAccount.cashWithdrawal(50);
viniAccount.cashWithdrawal(350);
viniAccount.closeAccount();
