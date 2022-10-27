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


module.exports = Bancos