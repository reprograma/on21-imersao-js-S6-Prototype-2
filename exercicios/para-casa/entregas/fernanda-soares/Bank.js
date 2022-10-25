module.exports = class Bank {
  code;
  name;
  #transferFee;
  static banksCreated = [];

  constructor(code, name, transferFee) {
    this.code = code;
    this.name = name;
    this.#transferFee = transferFee;

    const newBank = { code: code, clients: 0 };
    this.constructor.banksCreated.push(newBank);

    console.log(`${name} created.`);
  }
};
