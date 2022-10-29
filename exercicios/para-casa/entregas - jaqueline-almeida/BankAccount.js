const  Client = require('./Client')
const  Bank  = require('./Bank')

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #amount = 0;
    #qty24HourBank = 0;
    #tax24HourBank = 3;
    #timesQty24HourBank = 3

    constructor(client, bank, accountNumber, agencyNumber) {
        if (client instanceof Client && bank instanceof Bank) {
            this.client = client;
            this.bank = bank;
            this.accountNumber = accountNumber;
            this.agencyNumber = agencyNumber;
        } else if (!(client instanceof Client)) {
            return new Error ("client precisa ser instância da classe Client" );
        } else if(!( bank instanceof Bank)) {
            return new Error ("bank precisa ser instância da classe Bank" );
        }

        console.log(BankAccount)
    }

    credit(amount) {
        this.#amount += amount;
        console.log(`Saldo atualizado da conta é:  R$ ${this.#amount}`)
    }

    debit(amount) {
        this.#amount += amount;
        console.log(`Novo saldo da conta atualizado:  R$ ${this.#amount}`)
    }

    // realizacao de transferencia entre contas
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
             
        } else if (!(anotherAccount instanceof BankAccount)){
                    console.log(`Another account não é uma instância de BankAccount`)
        } else if(this.#amount < amount) {
                     console.log(`Saldo insuficiente para prosseguir operação. Saldo atual: ${this.#amount}`);
        }   
    }
        
        // verificar se é ja atingiu a quantidade maxima de saque
    cashWithdrawal(amount){
        if(this.#amount < amount ) {
            console.log("Você não possui saldo para sacar")
            } else {
                this.#qty24HourBank++;
        
            if (this.#qty24HourBank <= this.#timesQty24HourBank) {
                 this.#amount -=amount;
            }else {
                 this.#amount = this.#amount - (amount - this.#qty24HourBank);
             }

            const counter = this.#timesQty24HourBank - this.#qty24HourBank;
            let result = "";
            if (counter > 0) {
                result `Você ainda possui ${counter} retiradas gratuitas`
            } else {
            result = "Você não tem mais retiradas gratuitas disponíveis"
            }

            console.log(`As primeiras ${this.#timesQty24HourBank} retiradas são gratuitas.replace
            Retirada realizada com sucesso. O saldo atual da conta é de ${amount}.
            Total de retiradas realizadas: ${this.#qty24HourBank} ${result}`
            );
        }
    }

    closeAccount(){
        if (this.#amount > 0){
            console.log("A conta não pode ser encerrada");
        }else {
            console.log("Conta encerrada");
            this.client.removeBank(this.bank)
        }

    }
}
const bank1 = new Bank (1, "Banco do Brasil", 0.05);
const bank2 = new Bank (2, "Caixa Economica", 0.02)

const client1 = new Client('Jaqueline', '2222');
const client2 = new Client('Maria', '2222')

client1.addBank(bank1);
client1.addBank(bank2);

client2.addBank(bank1)
client2.addBank(bank2);
client2.removeBank(bank2);

const bankAccount2 = new BankAccount(client2, bank1, 245, 34567);

bankAccount2.closeAccount();

console.log(bankAccount2)

module.exports = BankAccount;