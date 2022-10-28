class Bank {
    code;
    nameBank;
    #bankFee;

    constructor(code, nameBank, bankFee) {
        this.code = code;
        this.nameBank = nameBank;
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

module.exports = Bank