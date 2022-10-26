
class Bancos {
    constructor(codigo, nomeBanco, taxa) {
        this.codigo = codigo
        this.nomeBanco = nomeBanco
        this.taxa = taxa

        this.constructor.bancosCriados.push({ codigoBanco: this.codigo, qteClientes: 0 })

    }
    static bancosCriados = []

}


module.exports = Bancos