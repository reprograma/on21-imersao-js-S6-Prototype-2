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

console.log(Animal.animals);

const animal1 = new Animal('cachorro', 'Aslam', 3, 23);
const animal2 = new Animal('cachorro', 'Caju', 3, 40);
const animal3 = new Animal('cachorro', 'Frida', 3, 32);
const animal4 = new Animal('cachorro', 'Cacau', 3, 17);

console.log(Animal.animals); 