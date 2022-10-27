class Bank {
  code;
  name;
  #transferRate;

  constructor(code, name, transferRate) {
    this.code = code;
    this.name = name;
    this.#transferRate = transferRate;

    this.constructor.createdBanks.push({
      code: this.code,
      qtdClients: 0,
    });
  }

  get transferRate() {
    return this.#transferRate;
  }
  static createdBanks = [];
}

module.exports = { Bank };
