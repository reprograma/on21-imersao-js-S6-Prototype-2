class Person{
    nome;
    #cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf
    }
}

module.exports = { Person };