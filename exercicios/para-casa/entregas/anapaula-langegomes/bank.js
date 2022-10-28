class Bank {
    code
    name
    #transferTaxa

    constructor(code, name, transferTaxa) {
        this.code = code
        this.name = name
        this.#transferTaxa = transferTaxa
        this.clientQty = 0
        this.constructor.groupBanks.push({ bankCode: this.code, clientQty: this.clientQty })

    }

    get transferTaxa() {
        return this.#transferTaxa
    }

    set transferTax(taxa) {
        return this.#transferTaxa = taxa
    }
}    