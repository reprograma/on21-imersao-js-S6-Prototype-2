const { Banco } = require('./Banco');
const { Cliente } = require('./Cliente');

class ContaBanco {
    cliente;
    banco;
    numero;
    agencia;
    #isAtiva;
    #saldo;
    #retiradasGratuitasPermitidas;
    #qtdRetiradasRealizadas;
    #taxaExcederRetiradas;
    constructor(cliente, banco, numero, agencia) {
        if (!(cliente instanceof Cliente)) {
            return new Error('Cliente inválido. Erro criar nova conta');
        }
        if (!(banco instanceof Banco)) {
            return new Error('Banco inválido. Erro criar nova conta');
        }
        if (!cliente.bancos.includes(banco)) {
            return new Error(`Erro! ${cliente.nome} não é cliente do banco ${banco.nome}`);
        }
        this.cliente = cliente;
        this.banco = banco;
        this.numero = numero;
        this.agencia = agencia;
        this.#isAtiva = true;
        this.#saldo = 0;
        this.#qtdRetiradasRealizadas = 0;
        this.#taxaExcederRetiradas = 5; // percentual (5%)
        this.#retiradasGratuitasPermitidas = 4;
    }

    get saldo() {
        return this.#saldo;
    }

    get qtdRetiradasRealizadas() {
        return this.#qtdRetiradasRealizadas;
    }

    get taxaExcederRetiradas() {
        return this.#taxaExcederRetiradas;
    }

    get retiradasGratuitasPermitidas() {
        return this.#retiradasGratuitasPermitidas;
    }

    get isAtiva() {
        return this.#isAtiva;
    }

    creditar(valor) {
        this.#saldo += valor;
        console.log(`Foram creditados R$${valor}. Saldo atual: R$${this.#saldo}`);
    }

    debitar(valor) {
        if (valor > this.#saldo) {
            return new Error(`Não foi possível efetuar o saque de R$${valor}. Saldo insuficiente (R$${this.#saldo})`);
        }
        this.#saldo -= valor;
        console.log(`Foram debitados R$${valor}. Saldo atual: R$${this.#saldo}`);
    }

    transferirPara(outraConta, valor) {
        let valorTaxa = this.banco !== outraConta.banco ?
            (this.banco.taxaTransferencia / 100 * valor) : 0;
        if (!(outraConta instanceof ContaBanco)) {
            return new Error('Conta selecionada para a transferência é inválida');
        }
        if (this.#saldo < valor) {
            return new Error(`Não foi possível efetuar a tranferência de R$${valor}. Saldo insuficiente (R$${this.#saldo})`);
        }
        this.saldo += (this.#saldo + valorTaxa);
        outraConta.saldo += valor;
        console.log(`Transferência realizada com sucesso!\n Saldo atual da conta de origem: R$${this.#saldo}`);
    }

    sacarDinheiro(valor) {
        let valorTaxa = this.#qtdRetiradasRealizadas >= this.#retiradasGratuitasPermitidas ?
            (this.taxaExcederRetiradas / 100 * valor) : 0;

        if (this.#saldo < valor) {
            return new Error(`Não foi possível efetuar o saque de R$${valor}. Saldo insuficiente (R$${this.#saldo})`);
        }
        this.#saldo -= (valor + valorTaxa);
        this.#qtdRetiradasRealizadas++;

        console.log(`\n******** Saque de R$${valor} realizado com sucesso! Saldo atual é de R$${this.#saldo} ********`);
        console.log(`Total de saques gratuitos permitidos: R$${this.#retiradasGratuitasPermitidas}`);
        console.log(`Quantidade de saques realizados: R$${this.#qtdRetiradasRealizadas}\n`);
        if (this.#qtdRetiradasRealizadas > this.#retiradasGratuitasPermitidas) {
            console.log(`******** Você ultrapassou o limite de ${this.#retiradasGratuitasPermitidas} saques gratuítos. Para cada novo saque será cobrada uma taxa de ${this.#taxaExcederRetiradas}% ********\n`);
        }
    }

    fecharConta() {
        if (this.#saldo > 0) {
            return new Error(`Não é possível encerrar uma conta que possui saldo. Saldo atual: R$${this.#saldo}`);
        }
        this.#isAtiva = false;
        console.log(`Conta ${this.numero}-${this.agencia} encerrada.`);
    }
}


module.exports = { ContaBanco };