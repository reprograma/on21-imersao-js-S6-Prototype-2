class Animal {
	constructor(type, name, age) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.energy = 0;
	}

	eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	}

	sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	}
}

const animal1 = new Animal('cachorro', 'Aslam', 3);
console.log(animal1);
