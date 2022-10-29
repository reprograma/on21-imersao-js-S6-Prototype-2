class Bank {

    code;
    name;
    #transfTax;
  
    constructor(code, name, transfTax){
        this.code = code;
        this.name = name;
        this.#transfTax = transfTax;
        this.constructor.createBanks.push({
            code: code,
            qtyClients: 0
        });
    }

    static createBanks = [];

}

module.exports = Bank;


