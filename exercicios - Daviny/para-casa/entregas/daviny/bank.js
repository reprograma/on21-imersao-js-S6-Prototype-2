class Bank {
  code;
  bankName;
  #fee;
  constructor(code, bankName, fee) {
    this.code = code;
    this.bankName = bankName;
    this.#fee = fee;
    this.constructor.createdBanks.push({ code: this.code, qtyClients: 0 });
  }
  static createdBanks = [];
}
module.exports = Bank;
