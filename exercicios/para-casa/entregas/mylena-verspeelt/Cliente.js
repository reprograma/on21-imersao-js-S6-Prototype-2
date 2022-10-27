const Bancos = require("./Bancos.js")
const Pessoa = require("./Pessoa.js")

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



module.exports = Cliente