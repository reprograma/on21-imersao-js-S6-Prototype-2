export class Bank {
    code;
    name;
    #tax;
    qtdCustomer = 0;

    constructor(code, name, tax){
        this.code = code;
        this.name = name;
        this.#tax = tax;
        this.constructor.createdBanks.push({bankCode: this.code, qtdCustomer: this.qtdCustomer});
    }

    static createdBanks = [];

}