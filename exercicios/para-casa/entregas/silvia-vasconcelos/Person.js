class Person{
    nome;
    #cpf;
    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf
    }
}

const pessoa = new Person('Maria', 11122233344);
console.log(pessoa);

module.exports = Person