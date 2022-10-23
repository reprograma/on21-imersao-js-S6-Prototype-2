class Animal {
	type;
	name;
	age;
	hungry;
	energy = 0;
	constructor(type, name, age, hungry) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.hungry = hungry;

		this.constructor.animals.push(name);
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

console.log(Animal.animals);

const animal1 = new Animal('cachorro', 'Aslam', 3, 10);
const animal2 = new Animal('gato', 'Caju', 3, 15);
const animal3 = new Animal('tigre', 'Fred', 3, 2);
const animal4 = new Animal('coruja', 'Frida', 3, 1);

console.log(Animal.animals);
console.log(Animal.animals.length);

const animal5 = new Animal('coruja', 'Frida', 3, 1);
const animal6 = new Animal('coruja', 'Frida', 3, 1);
const animal7 = new Animal('coruja', 'Frida', 3, 1);
const animal8 = new Animal('coruja', 'Frida', 3, 1);
const animal9 = new Animal('coruja', 'Frida', 3, 1);

console.log(Animal.animals);
console.log(Animal.animals.length);
