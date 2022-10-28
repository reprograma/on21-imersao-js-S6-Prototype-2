class Person {
    name;
    #cpf;

    constructor(name, cpf){
        this.name = name;
        this.#cpf = cpf;
    }
}

const viniPerson = new Person('Vini', "14587425")
const arielPerson = new Person('Ariel', "456456456")
// console.log(viniPerson, arielPerson);

module.exports = { Person }