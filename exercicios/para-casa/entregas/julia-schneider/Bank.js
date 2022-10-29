class Bank {
    name
    code
    #transferTax

    constructor(name, code, transferTax) {
        this.name = name
        this.code = code
        this.#transferTax = transferTax
        this.qtyClient = 0

        this.constructor.createdBanks.push({ 
            name: this.name,
            code: this.setCode(this.name),
        })
    }

    get transferTax() {
        return this.#transferTax
    }

    set transferTax(tax) {
        return this.#transferTax = tax
    }

    static createdBanks = []
}


module.exports = Bank