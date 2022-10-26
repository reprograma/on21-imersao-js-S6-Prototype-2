import Bancos from "./Bancos"
import Cliente from "./Cliente"

class ContaBancaria {
    #saldo = 0
    #retirada24h = 0
    #taxaSaque24h = 0.8
    #limiteSaquesGratuitos = 3

    constructor(cliente, banco, conta, agencia) {
        if (cliente instanceof Cliente && banco instanceof Bancos && cliente.listaBancos.find(({ nomeBanco }) => nomeBanco === banco.nomeBanco)) {
            this.cliente = cliente.nome
            this.banco = banco.nomeBanco
            this.conta = conta
            this.agencia = agencia
        } else {
            return new Error('Não foi possível criar a conta. Verifique suas informações e tente novamente.')
        }
    }

    get saldo() {
        return `Saldo atual: ${this.#saldo} `
    }

    set saldo(novoSaldo) {
        return this.#saldo = novoSaldo
    }

    get taxaSaque24h() {
        return this.#taxaSaque24h
    }
    set taxaSaque24h(novoValor) {
        return this.#taxaSaque24h = novoValor
    }

    get limiteSaquesGratuitos() {
        return this.#limiteSaquesGratuitos
    }

    set limiteSaquesGratuitos(novoValor) {
        return this.#limiteSaquesGratuitos = novoValor
    }

    get retirada24h() {
        return this.#retirada24h
    }

    set retirada24h(novoValor) {
        return this.#retirada24h = novoValor
    }

    depositar(valor) {
        this.#saldo += valor
        return `Depósito no valor de ${valor} realizado com sucesso`
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor
            return `Saque realizado no valor de ${valor}`
        } else {
            return 'Você não possui saldo suficiente.'
        }
    }

    transferir(conta, valor) {
        if (conta instanceof ContaBancaria) {
            this.sacar(valor)
            conta.depositar(valor)
            return `Deposito realziado com sucesso no valor de: ${valor}`
        } else {
            return 'Não foi possível realizar a transferência.'
        }
    }

    saque24h(valor) {

        if (this.#saldo >= valor) {
            if (this.#retirada24h <= this.#limiteSaquesGratuitos) {
                this.#retirada24h ++
                let saquesRestantes = this.#limiteSaquesGratuitos - this.#retirada24h
                if (saquesRestantes > 0) {
                    this.sacar(valor)
                    return `Saque realizado com sucesso. Você realizou ${this.#retirada24h} saque(s) gratuito(s) este mês. Ainda restam ${saquesRestantes} saque(s) gratuitos.`
                } else if (saquesRestantes === 0) {
                    this.sacar(valor)
                    return `Saque realizado com sucesso. Não há mais saques gratuitos disponiveis. A partir do próximo saque será cobrada uma taxa de R$${this.#taxaSaque24h}`
                } else {
                    let valorTaxado = valor * this.#taxaSaque24h
                    this.sacar(valorTaxado)
                    this.#retirada24h ++
                    return `Saque realizado com sucesso. Taxa de transferência aplicada: R$${this.#taxaSaque24h}0`
                }
            }
        } else {
            return 'Você não possui saldo suficiente para realizar o saque.'
        }
    }

    encerrarConta() {
        if (this.#saldo === 0) {
            return 'Conta encerrada com sucesso'
        } else {
            return 'Para encerrar sua conta é necessário que o saldo esteja zerado.'
        }
    }

}

module.exports = ContaBancaria

