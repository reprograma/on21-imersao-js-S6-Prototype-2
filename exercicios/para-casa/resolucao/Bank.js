class Bank {
	bankCode;
	bankName;
	#trasferTax;
	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#trasferTax = transferTax;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
	}

	get transferTax() {
		return this.#trasferTax;
	}

	static createdBanks = [];
}

const bank1 = new Bank(100, 'LuaBank', 0.01);
const bank2 = new Bank(200, 'AnotherBank', 0.02);
// console.log(bank1); // Bank { bankCode: 100, bankName: 'LuaBank' }
// console.log(bank2); // Bank { bankCode: 200, bankName: 'AnotherBank' }
// console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 }, { bankCode: 200, qtdClients: 0 } ]

module.exports = { Bank, bank1, bank2 };
