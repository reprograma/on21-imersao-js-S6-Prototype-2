class Pessoa {
    nome;
    #cpf

    constructor(nome, cpf) {
        this.nome = nome
        this.#cpf = cpf
    }

}

module.exports = Pessoa


