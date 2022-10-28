class BankAccount {
    #amount = 0;
    #qtdWithdrawal = 0;
    #taxWithdral = 3;
    
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
}
        
// const newBankAccount = new BankAccount('Bea', 'Nu', '0001', '05366')
// const newBankAccount2 = new BankAccount('Be', 'N', '000', '053')
// console.log(newBankAccount)
// newBankAccount.credit(500)
// newBankAccount.debit(450)
// newBankAccount2.credit(1000)
// newBankAccount.transferTo(newBankAccount2, 500)

module.exports = BankAccount;