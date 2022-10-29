//Atividade parcialmente concluída.

class Person {

    #CPF;

    constructor(name, CPF){
        this.name = name,
        this.#CPF = CPF
    }
}

const Geisiane = new Person ("Geisiane", "000.000.000-00")

//console.log(Geisiane)

class Bank {

    #transferRate

    constructor(bankCode, bank, transferRate){
        this.bankCode = bankCode,
        this.bank = bank,
        this.#transferRate = transferRate,
        this.constructor.createdBanks.push({ bankCode: this.bankCode, numberOfCustomers: 0})
    }

    static createdBanks = [];

}

const Itau = new Bank(1478, "Itaú", 2)
const Bradesco = new Bank(237, "Bradesco", 5)
const BancoDoBrasil = new Bank(001, "Banco do Brasil", 3)

// console.log(Itau)
// console.log(Bradesco)
// console.log(BancoDoBrasil)
// console.log(Bank.createdBanks)

class Client extends Person{

    banks = []

    constructor(bank){
        super(bank)
    }

    addBank(bank){
        // Criar método
    }

    removeBank(bank){
        // Criar método
    }

}

const Alessandra = new Client("Alessandra", "000.000.000-00")
console.log(Alessandra) // Retorna: Client { name: 'Alessandra', banks: [] }
