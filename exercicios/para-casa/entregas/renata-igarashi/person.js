class Person {
    name
    #cpf

    constructor(name, cpf) {
        this.name = name
        this.#cpf = cpf
    }
}

const person1 = new Person('Maria', 12345678900); // Instanciação de um objeto Person.

// console.log(person1);
module.exports = Person