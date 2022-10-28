class Pessoa {
    nome;
    #cpf

    constructor(nome, cpf) {
        this.nome = nome
        this.#cpf = cpf
    }

}

class Bancos {
    codigo;
    nomeBanco;
    taxa;

    constructor(codigo, nomeBanco, taxa) {
        this.codigo = codigo
        this.nomeBanco = nomeBanco
        this.taxa = taxa

        this.constructor.bancosCriados.push({ codigoBanco: this.codigo, qteClientes: 0 })


    }

    static bancosCriados = []
    static totalBancosCriados = 0


}

//const Bancos = require("./Bancos.js")
//const Pessoa = require("./Pessoa.js")

class Cliente extends Pessoa {

    listaBancos = []

    constructor(nome) {
        super(nome)
    }


    addBanco(banco) {
        if (banco instanceof Bancos) {
            if (this.listaBancos.find(({ nomeBanco }) => nomeBanco === banco.nomeBanco)) {
                console.log('Não é possível adicionar este banco pois o mesmo já foi adicionado anteriormente.')
            } else {
                this.listaBancos.push({ codigo: banco.codigo, nomeBanco: banco.nomeBanco })
                Bancos.totalBancosCriados++
                console.log(`Banco ${banco.nomeBanco} adicionado a cliente ${this.nome}`)
            }
        } else {
            return new Error('Não foi possível vincular um banco.')
        }
    }

    removerBanco(banco) {
        if (banco instanceof Bancos) {
            if (this.listaBancos.find(({ nomeBanco }) => nomeBanco === banco.nomeBanco)) {
                let elemento = this.listaBancos.findIndex(obj => obj.nomeBanco === banco.nomeBanco)
                this.listaBancos.splice(elemento, 1)
                Bancos.totalBancosCriados--
                console.log(`Banco ${banco.nomeBanco} removido com sucesso!`)
            } else {
                return new Error('Não foi possível remover a conta pois você não possui conta no mesmo.')
            }
        } else {
            return new Error('Banco inválido')
        }
    }
}

//const Bancos = require("./Bancos.js")
//const Cliente = require("./Cliente.js")

class ContaBancaria {
    #saldo = 0
    #retirada24h = 0
    #taxaSaque24h = 0.8
    #limiteSaquesGratuitos = 3

    constructor(cliente, banco, conta, agencia) {
        console.log(cliente)
        console.log(banco);
        console.log(cliente.listaBancos);
        console.log(cliente.listaBancos.find(({ nomeBanco }) => nomeBanco === banco.nomeBanco));
        if (cliente instanceof Cliente && banco instanceof Bancos && cliente.listaBancos.find(({ nomeBanco }) => nomeBanco === banco.nomeBanco)) {
            this.cliente = cliente.nome
            this.banco = banco.nomeBanco
            this.conta = conta
            this.agencia = agencia
        } else {
        console.log('Não foi possível criar a conta. Verifique suas informações e tente novamente.')
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
        console.log(`Depósito no valor de ${valor} realizado com sucesso`)
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor
            console.log(`Saque realizado no valor de ${valor}`)
        } else {
            return new Error('Você não possui saldo suficiente.')
        }
    }

    transferir(conta, valor) {
        if (conta instanceof ContaBancaria) {
            this.sacar(valor)
            conta.depositar(valor)
            console.log(`Deposito realziado com sucesso no valor de: ${valor}`)
        } else {
            return new Error('Não foi possível realizar a transferência.')
        }
    }

    saque24h(valor) {

        if (this.#saldo >= valor) {
            if (this.#retirada24h <= this.#limiteSaquesGratuitos) {
                this.#retirada24h ++
                let saquesRestantes = this.#limiteSaquesGratuitos - this.#retirada24h
             //   console.log("saquesRestantes", saquesRestantes)
                if (saquesRestantes > 0) {
                    this.sacar(valor)
                    console.log(`Saque realizado com sucesso. Você realizou ${this.#retirada24h} saque(s) gratuito(s) este mês. Ainda restam ${saquesRestantes} saque(s) gratuitos.`
                    )
                } else if (saquesRestantes === 0) {
                    this.sacar(valor)
                    console.log(`Saque realizado com sucesso. Não há mais saques gratuitos disponiveis. A partir do próximo saque será cobrada uma taxa de R$${this.#taxaSaque24h}`
                    )
                } else {
                    let valorTaxado = valor * this.#taxaSaque24h
                    this.sacar(valorTaxado)
                    this.#retirada24h ++
                    console.log(`Saque realizado com sucesso. Taxa de transferência aplicada: R$${this.#taxaSaque24h}0`
                    )
                }
            }
        } else {
           console.log('Você não possui saldo suficiente para realizar o saque.')
        }
    }

    encerrarConta() {
       // console.log('saldoooo',this.#saldo)
        if (this.#saldo === 0) {
            console.log('Conta encerrada com sucesso')
        } else {
            console.log('Para encerrar sua conta é necessário que o saldo esteja zerado.')
        }
    }

}
//const Bancos = require("./Bancos.js")
//const Cliente = require("./Cliente.js")
//const ContaBancaria = require("./ContaBancaria.js")
//const Pessoa = require("./Pessoa.js")

const Joana = new Pessoa('Joana', 123456789)
const Marcia = new Pessoa('Marcia', 987654321)

//console.log(Joana)
//console.log(Marcia)

const bancoNubank = new Bancos(20, 'Nubank', 0.5)
const bancoItau = new Bancos(10, 'Itau', 0.3)
const bancoBradesco = new Bancos(30, 'Bradesco', 0.8)
//console.log(bancoBradesco);

//console.log(Bancos)
const clienteJoana = new Cliente('Joana')
const clienteMarcia = new Cliente('Marcia')

//console.log(clienteJoana)
const contaBancariaMarcia = new ContaBancaria(clienteMarcia, bancoItau, 3000, 45678)
const contaBancariaJoana = new ContaBancaria(clienteJoana, bancoBradesco, 5000, 12345)

contaBancariaJoana.depositar(100)
contaBancariaJoana.saque24h(20)
contaBancariaJoana.saque24h(20)
contaBancariaJoana.saque24h(20)
contaBancariaJoana.saque24h(20)
contaBancariaJoana.saque24h(20)

contaBancariaJoana.sacar(24)

contaBancariaJoana.encerrarConta()

console.log(contaBancariaJoana)
//console.log(contaBancariaMarcia);
