class Bank {
    id;
    name;
    #tax;
    qtyClients = 0;
    static createdBanks = [];

    constructor(id, name, tax){
        this.id = id;
        this.name = name;
        this.#tax = tax;
        this.constructor.createdBanks.push({id: this.id, qtyClients: this.qtyClients});
    }

    get tax(){
        return this.#tax;
    }

    addClient(){
        this.qtyClients += 1;
    }

    removeClient(){
        this.qtyClients -= 1;
    }

}

module.exports = {Bank, bankNubank, bankInter};