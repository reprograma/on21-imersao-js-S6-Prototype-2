const Client = require("./Clients");
class Bank{
  code;
  bankName;
  #transferRate;

    constructor(code, bankName, transferRate ){
      this.code=code
      this.bankName=bankName
      this.#transferRate=transferRate
      const cBancks= this.constructor.createdBanks;
      if (!cBancks.find(b => b.code === code)){
        this.constructor.createdBanks.push({code:code, qtyClients: 0})
      }
    }
    static createdBanks = []; 
};

module.exports=Bank; 