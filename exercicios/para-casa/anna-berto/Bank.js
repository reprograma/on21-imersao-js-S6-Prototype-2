class Bank {
  bankCode;
  bankName;
  qtdPersons;
  #transferRate;
  qtdPersons = 0;
  constructor(bankCode, bankName, transferRate) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferRate = transferRate;
    this.constructor.bankCreated.push({
      codBankCreated: this.bankCode,
      qtdPersons: this.qtdPersons,
    });
  }
  static bankCreated = [];
}

module.exports = { Bank };
