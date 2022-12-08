class Person {
	name;
	#cpf;
	constructor(name, cpf) {
		this.name = name;
		this.#cpf = cpf;
	}

	get cpf() {
		return this.#cpf;
	}
}

// const person1 = new Person('Maria', 12345678900)
// console.log(person1); // Person { name: 'Maria' }

module.exports = { Person };
