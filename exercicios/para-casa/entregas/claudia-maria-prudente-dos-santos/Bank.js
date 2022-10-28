class Bank {
  code;
  name;
  #transferTax;
  constructor(code, name, transferTax) {
    this.code = code;
    this.name = name;
    this.#transferTax = transferTax;

    this.constructor.createdBanks.push({ code: code, qtdClients: 0 });
  }

  get transferTax() {
    return this.#transferTax;
  }

  static createdBanks = [];
}

module.exports = Bank;
