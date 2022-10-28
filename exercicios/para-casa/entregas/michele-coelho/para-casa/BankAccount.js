const Bank = require('./Bank');
const Client = require('./Client');

class BankAccont {

    cliente;
    banco;
    numero;
    agencia;
    taxaRetirada24h;
    #montante;
    #qtdRetiradasDinheiro;
    #taxaRetirada24h;

    constructor(cliente, banco, numero, agencia, taxaRetirada24h) {

        if (cliente instanceof Client && banco instanceof Bank) {

            if (Bank.name === banco) {
                this.cliente = cliente;
                this.banco = banco;
                this.numero = numero;
                this.agencia = agencia;
                this.#montante = 0;
                this.#qtdRetiradasDinheiro = 0;
                this.#taxaRetirada24h = taxaRetirada24h;
                this.retiradasGratuitas = 3;
            } else {
                console.log("A conta não pode ser criada, pois não é um cliente do banco!");
            }
        } else {
            console.log("Cliente deve obrigatoriamente ser do tipo Client e banco deve obrigatoriamente ser do tipo Bank");
        }
    }
    get montante() {
        return this.#montante;
    };
    set montante(valor) {
        this.#montante = valor;
    }
    get taxaRetirada24h() {
        return this.#taxaRetirada24h;
    }
    set taxaRetirada24h(valor) {
        this.#taxaRetirada24h = valor;
    }
    get qtdRetiradasDinheiro() {
        return this.#qtdRetiradasDinheiro;
    }
    set qtdRetiradasDinheiro(qtd) {
        this.#qtdRetiradasDinheiro = qtd;
    }
    credit(amount) {
        console.log(`Valor credito: ${this.#montante += amount}`);
    }
    debit(amount) {
        if (this.#montante >= amount) {
            this.#montante -= amount;
        } else {
            console.log("valor suficiente para a operação");
        };
    }
    transferTo(anotherAccount, amount) {
        if (anotherAccount instanceof BankAccont) {

            if (this.banco !== anotherAccount.banco) {
                this.debit(banco.taxtaxaTransferencia + amount);
                anotherAccount.credit(amount);
            } else {
                this.debit(amount)
                anotherAccount.credit(amount);
            }
        } else {
            console.log("O parâmetro anotherAccount deve obrigatoriamente ser do tipo BankAccount");
        }
    }
    cashWithdrawal(amount) {
        if (this.#qtdRetiradasDinheiro > retiradasGratuitas) {
            debit(this.#taxaRetirada24h);
            if (this.#montante >= amount) {
                debit(amount);
            } else {
                console.log("valor suficiente para a operação!");
            }

        } else {

            if (this.#montante >= amount) {
                this.#qtdRetiradasDinheiro++;
                debit(amount);
                if (this.#qtdRetiradasDinheiro <= this.retiradasGratuitas) {
                    console.log(`Você possui: ${this.#qtdRetiradasDinheiro} retiradas gratuitas`);
                } else {
                    console.log(`Você possui não possui retirada gratuíta será cobrada em cada retirada uma taxa de: R$ ${this.#taxaRetirada24h}.`);
                }
            } else {
                console.log("valor suficiente para a operação!");
            }
        }
    }
    closeAccount() {
        if (this.montante > 0) {
            console.log("A conta possui saldo, não é possível encerrá-la");
        } else {
            this.cliente.removeBank(this.banco);
        }
    }
}
module.exports = BankAccont;
