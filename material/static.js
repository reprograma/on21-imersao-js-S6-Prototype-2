class Animal {
	constructor(type, name, age, hungry) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.energy = 0;
		this.hungry = hungry;
		this.constructor.animals.push({ name: this.name, hungry: this.hungry });
	}

	eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	}

	sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	}

	static animals = [];
}

const animal1 = new Animal("cachorro", "Frida", 2 ,1)
const animal2 = new Animal("coruja", "esmeralda", 4, 1)

console.log(Animal.animals);