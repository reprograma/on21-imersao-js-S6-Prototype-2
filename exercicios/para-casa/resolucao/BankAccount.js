const { Bank } = require('./Bank');
const { Client } = require('./Client');

class BankAccount {
	client;
	bank;
	accountNumber;
	agencyNumber;
	#amount = 0;
	#withdrawalTax = 0.03;
	qtdWithdrawal = 0;

	constructor(client, bank, accountNumber, agencyNumber) {
		if (!(client instanceof Client)) {
			return new Error('Informe um cliente válido');
		}
		if (!(bank instanceof Bank)) {
			return new Error('Informe um banco válido');
		}
		if (
			client.banks.find((element) => element.bankCode === bank.bankCode) ===
			undefined
		) {
			return new Error(
				`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName}`
			);
		}
		this.client = client;
		this.bank = bank;
		this.accountNumber = accountNumber;
		this.agencyNumber = agencyNumber;
	}

	get amount() {
		return this.#amount;
	}

	creditAmount(amount) {
		this.#amount += amount;
		console.log(`O novo saldo da conta é: R$ ${this.#amount}`);
	}

	debitAmount(amount) {
		this.#amount -= amount;
		console.log(`O novo saldo da conta é: R$ ${this.#amount}`);
	}

	transferTo(anotherAccount, amount) {
		if (anotherAccount instanceof BankAccount) {
			let amountToBeDebited = amount;
			if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
				amountToBeDebited = amount + amount * this.bank.transferTax;
			}
			if (this.#amount >= amountToBeDebited) {
				this.debitAmount(amountToBeDebited);
				anotherAccount.creditAmount(amount);

				console.log(`O saldo atual da conta de origem é de R$ ${this.#amount}`);
				console.log(
					`O saldo atual da conta de destino é de R$ ${anotherAccount.amount}`
				);
			} else {
				console.log(
					`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
						this.#amount
					}`
				);
			}
		} else {
			console.log('Informe uma conta válida!');
		}
	}

	cashWithdrawal(amount) {
		let amountToBeDebited = amount;

		console.log(
			`Você já realizou ${this.qtdWithdrawal} retiradas. As primeiras 2 retiradas são gratuitas.`
		);
		if (this.qtdWithdrawal >= 2) {
			amountToBeDebited = amount + amount * this.#withdrawalTax;
			console.log(
				`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de ${
					this.#withdrawalTax
				}`
			);
		} else {
			console.log(
				`Você ainda possui ${2 - this.qtdWithdrawal} retiradas gratuitas.`
			);
		}

		if (this.#amount >= amountToBeDebited) {
			this.debitAmount(amountToBeDebited);

			console.log(
				`Retirada realizada. O saldo atual da conta é de R$ ${this.#amount}.`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#amount
				}`
			);
		}
		this.qtdWithdrawal++;
		console.log(`Total de retiradas: ${this.qtdWithdrawal}`);
	}

	closeAccount() {
		if (this.#amount === 0) {
			this.client = undefined;
			this.accountNumber = undefined;
			this.agencyNumber = undefined;
			this.bank = undefined;
			console.log('Conta encerrada!');
		} else {
			console.log(
				`Você possui um saldo de R$ ${
					this.#amount
				}. Para encerrar a conta é necessário que o saldo seja igual a zero.`
			);
		}
	}
}

module.exports = { BankAccount };
