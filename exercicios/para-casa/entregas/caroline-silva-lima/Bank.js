const Client = require("./Clients");
class Bank{
    #transferRate;
    static createdBanks = [];

    constructor(code, bankName, transferRate ){
      this.code=code
      this.bankName=bankName
      this.#transferRate=transferRate
      const cBancks= this.constructor.createdBanks;
      if (!cBancks.find(b => b.code === code)){
        this.constructor.createdBanks.push({code:code, qtyClients: 0})
      }
    }
};

module.exports=Bank; 