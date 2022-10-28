class Banco {
    codigo;
    nome;
    #taxaTransferencia;
    quantidadeClientes;
    constructor(codigo, nome, taxaTransferencia) {
        this.codigo = codigo;
        this.nome = nome;
        this.taxaTransferencia = taxaTransferencia;
        this.quantidadeClientes = 0;
        this.constructor.bancosCriados.push({ codigo: codigo, nome: nome, quantidadeClientes: this.quantidadeClientes /* Adicionar quantidade de clientes aqui */ });
    }

    static bancosCriados = [];

    static getIndexBancoCriado(banco, array) {
        return array.findIndex(b => b.codigo === banco.codigo && b.nome === banco.nome);
    }

    static atualizarQuantidadeClientes(banco, aumentar = true) {
        let indexBanco = Banco.getIndexBancoCriado(banco, Banco.bancosCriados);
        if (aumentar) {
            banco.quantidadeClientes++;
        } else {
            banco.quantidadeClientes--;
        }

        if (indexBanco !== -1) {
            Banco.bancosCriados[indexBanco] = banco;
        }
    }

    get codigo() {
        return this.codigo;
    }

    set codigo(codigo) {
        this.codigo = codigo;
    }

    get nome() {
        return this.nome;
    }

    set nome(nome) {
        this.nome = nome;
    }

    get taxaTransferencia() {
        return this.#taxaTransferencia;
    }

    set taxaTransferencia(taxaTransferencia) {
        this.#taxaTransferencia = taxaTransferencia;
    }
}

module.exports = { Banco };