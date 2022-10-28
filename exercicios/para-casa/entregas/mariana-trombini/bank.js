
class Bank {
  bankCode
  bankName
  #bankTransferFee
  constructor(bankCode, bankName, bankTransferFee) {
    this.bankCode = bankCode
    this.bankName = bankName
    this.#bankTransferFee = bankTransferFee
    this.constructor.createdBanks.push({ bankCode: this.bankCode, qtyClients: 0 })

  }

  get bankCode() {
    return this.bankCode
  }

  set bankCode(newBankCode) {
    return this.bankCode = newBankCode
  }

  get bankName() {
    return this.bankName
  }

  set bankname(newBankName) {
    return this.bankName = newBankName
  }

  get bankTransferFee() {
    return this.#bankTransferFee
  }

  set bankTransferFee(newBankTransferFee) {
    return this.bankTransferFee = newBankTransferFee
  }

  static createdBanks = []
}


module.exports = Bank