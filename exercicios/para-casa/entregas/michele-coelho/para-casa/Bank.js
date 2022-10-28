
class Bank {
    codigo;
    nome;
    #taxaTransferencia;
    qtdClient;

    constructor(codigo, nome, taxaTransferencia) {
        this.codigo = codigo;
        this.nome = nome;
        this.#taxaTransferencia = taxaTransferencia;
        this.constructor.bancosCriados.push({ codigo: this.codigo, qtdCliente: 0 });
    }

    static bancosCriados = [];
    get qtdCliente(){
        return this.qtdCliente;
    }
    set qtdCliente(num) {
        this.qtdCliente=num;
    }
    get taxaTransferencia() {
        return this.#taxaTransferencia;
    }
    set taxaTransferencia(valor) {
        this.#taxaTransferencia = valor;
    }
}

module.exports = Bank;