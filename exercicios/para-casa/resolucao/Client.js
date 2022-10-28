const { Bank } = require('./Bank');
const { Person } = require('./Person');

class Client extends Person {
	banks = [];
	constructor(name, cpf) {
		super(name, cpf);
	}

	#updateBank(bank, action) {
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		if (action === 'add') {
			Bank.createdBanks[bankIndex].qtdClients++;
		} else if (action === 'remove') {
			Bank.createdBanks[bankIndex].qtdClients--;
		}
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bankCode === bank.bankCode) !==
			undefined
		);
	}

	addBank(bank) {
		if (bank instanceof Bank) {
			if (!this.hasAccountInThisBank(bank)) {
				this.banks.push(bank);
				this.#updateBank(bank, 'add');
				console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
			} else {
				console.log(
					`Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
				);
			}
		} else {
			console.log('Informe um banco válido');
		}
	}

	removeBank(bank) {
		if (bank instanceof Bank) {
			if (this.hasAccountInThisBank(bank)) {
				this.banks = this.banks.filter(
					(element) => element.bankCode !== bank.bankCode
				);
				this.#updateBank(bank, 'remove');
				console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
			} else {
				`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`;
			}
		} else {
			console.log('Informe um banco válido');
		}
	}
}

const client1 = new Client('Maria', 123456789);
const client2 = new Client('Sandra', 987654321);
// console.log(client1); // Client { name: 'Maria', banks: [] }
// console.log(client2); // Client { name: 'Sandra', banks: [] }

module.exports = { Client, client1, client2 };
