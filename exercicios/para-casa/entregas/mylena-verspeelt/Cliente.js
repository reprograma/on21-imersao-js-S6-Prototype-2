import Bancos from "./Bancos"
import Pessoa from "./Pessoa"

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

module.exports = Cliente