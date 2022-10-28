class Bank {
  bankCode;
  bankName;
  #transferRate;

  constructor(bankCode, bankName, transferRate) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferRate = transferRate;

    this.constructor.banks.push({ bankCode: bankCode, qtyClientes: 0 });
  }

  get transferRate() {
    return this.#transferRate;
  }

  set transferRate(newTransferRate) {
    this.#transferRate = newTransferRate;
  }

  static banks = [];
}

module.exports = Bank;
