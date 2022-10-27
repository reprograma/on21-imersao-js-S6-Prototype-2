class Bank {
    code;
    name;
    #tax;


    constructor(code, name, tax){
        this.code = code;
        this.name = name;
        this.#tax = tax;
        this.qtyClient = 0;
        this.constructor.createdBanks.push({code: this.code, qtyClient: this.qtyClient})
    }

    static createdBanks = []

}

module.exports = Bank;