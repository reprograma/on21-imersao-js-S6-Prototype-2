class Pessoa {
    nome;
    #cpf

    constructor(nome, cpf) {
        this.nome = nome
        this.#cpf = cpf
    }

}

const Joana = new Pessoa('Joana', 123456789)
const Marcia = new Pessoa('Marcia', 987654321)

// *************************************************************************

class Bancos {
    constructor(codigo, nomeBanco, taxa) {
        this.codigo = codigo
        this.nomeBanco = nomeBanco
        this.taxa = taxa

        this.constructor.bancosCriados.push({ codigoBanco: this.codigo, qteClientes: 0 })

    }
    static bancosCriados = []

}

const bancoNubank = new Bancos(20, 'Nubank', 0.5)
const bancoItau = new Bancos(10, 'Itau', 0.3)
const bancoBradesco = new Bancos(30, 'Bradesco', 0.8)


// *************************************************************************

class Cliente extends Pessoa {

    listaBancos = []

    constructor(nome) {
        super(nome)
    }

    addBanco(banco) {
        if (this.listaBancos.find(banco => banco)) {
            return 'Não é possível adicionar este banco pois o mesmo já foi adicionado anteriormente.'
        } else if (banco instanceof Bancos) {
            this.listaBancos.push({ codigo: banco.codigo, nomeBanco: banco.nomeBanco })
            // for(let i = 0; i <= Banco.bancosCriados.length ; i++){
            //     Banco.bancosCriados[i].push(qteClientes +=1)
            // }
            //  ADICIONAR LOGICA DE AUMENTAR QTD DE BANCOS
            return `Banco ${banco.nomeBanco} adicionado a cliente ${this.nome}`
        } else {
            return new Error('Não foi possível vincular um banco.')
        }
    }

    removerBanco(banco) {
        if (this.listaBancos.find(({ nomeBanco }) => nomeBanco === banco.nomeBanco)) {
            if (banco instanceof Bancos) {
                this.listaBancos.pop(banco.codigo)
                this.listaBancos.pop(banco.nomeBanco)
                return `Banco ${banco.nomeBanco} removido com sucesso!`
            }
        } else {
            return new Error('Não foi possível remover a conta pois você não possui conta no mesmo.')
        }

        // REMOVER 1 PONTO NA QTDE DE BANCOS
    }
}

const clienteJoana = new Cliente('Joana')
clienteJoana.addBanco(bancoBradesco)

const clienteMarcia = new Cliente('Marcia')
clienteMarcia.addBanco(bancoItau)

// *************************************************************************

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

const contaBancariaMarcia = new ContaBancaria(clienteMarcia, bancoItau, 3000, 45678)
const contaBancariaJoana = new ContaBancaria(clienteJoana, bancoBradesco, 5000, 12345)

contaBancariaMarcia.depositar(50)
contaBancariaJoana.depositar(50)

contaBancariaJoana.saldo
contaBancariaJoana.saque24h(10)
contaBancariaJoana.saldo
contaBancariaJoana.saque24h(10)
contaBancariaJoana.saldo
contaBancariaJoana.saque24h(10)
contaBancariaJoana.saldo
contaBancariaJoana.saque24h(10)
contaBancariaJoana.saldo
contaBancariaJoana.saque24h(20)
contaBancariaJoana.saldo