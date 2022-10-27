class Bank {
  bankCode;
  bankName;
  qtdPersons;
  #transferTax;
  qtdPersons = 0;
  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.constructor.bankCreated.push({
      codBankCreated: this.bankCode,
      qtdPersons: this.qtdPersons,
    });
  }
  static bankCreated = [];
}

module.exports = { Bank };
