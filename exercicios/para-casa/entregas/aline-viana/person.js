class Person {
    name
    #cpf
    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }
}

module.exports = Person;
// const person1 = new Person('Maria', 12345678900);
// console.log(person1); 