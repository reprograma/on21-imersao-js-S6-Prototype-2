class Bank {
    code
    name
    #transferTax

    constructor(code, name, transferTax) {
        this.code = code
        this.name = name
        this.#transferTax = transferTax
        this.clientQty = 0

        this.constructor.createdBanks.push({ bankCode: this.code, clientQty: this.clientQty })
    }

    get transferTax() {
        return this.#transferTax
    }

    set transferTax(tax) {
        return this.#transferTax = tax
    }

    static createdBanks = []
}

// const bank1 = new Bank(100, 'LuaBank', 0.01); // Instanciação de um objeto Bank.
// const bank2 = new Bank(200, 'Nubank', 0.01); // Instanciação de um objeto Bank.


// console.log(Bank.createdBanks)

module.exports = Bank