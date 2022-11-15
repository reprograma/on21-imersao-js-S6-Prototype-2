class Bank {
    code;
    nameBank;
    #transferRate;
    banksCreated = [];
    codeBanksCreated;
    qtyClients = 0;
  
    constructor(code, nameBank, transferRate, codeBanksCreated) {
      this.code = code;
      this.nameBank = nameBank;
      this.#transferRate = transferRate;
      this.codeBanksCreated = codeBanksCreated;
      this.constructor.banksCreated.push({
        codeBanksCreated: this.codeBanksCreated,
        qtyClients: this.qtyClients,
      });
    }
    static banksCreated = [];
  }


  module.exports = Bank;