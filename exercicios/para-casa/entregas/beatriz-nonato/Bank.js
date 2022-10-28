class Bank {
    code;
    name;
    #transferTax;

    constructor(code, name, transferTax, ) {
        this.code = code
        this.name = name;
        this.transferTax = transferTax;
        this.constructor.createBanks.push({code: code, qtdClients: 0});
    }

    static createBanks = []

    get transferTax() {
        return this.#transferTax
    }
}

module.exports = Bank;