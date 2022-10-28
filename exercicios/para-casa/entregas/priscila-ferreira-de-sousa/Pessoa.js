class Pessoa {
    nome;
    #cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        this.#cpf = cpf;
    }

    get nome() {
        return this.nome;
    }

    set nome(nome) {
        this.nome = nome;
    }
}

module.exports = { Pessoa };