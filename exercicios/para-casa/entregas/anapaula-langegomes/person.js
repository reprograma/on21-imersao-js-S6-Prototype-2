class Person{
    nome;
    #cpf;

    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf;
    }
}

const person1 = new Person('Ana', 98432556076);

module.exports = Person;