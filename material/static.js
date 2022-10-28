//metodo ou propriedades estaticas fazem gerenciamento da class

class Animal {
	type;
	name;
	age;
	energy = 0;
	constructor(type, name, age, hungry) {
		this.type = type;
		this.name = name;
		this.age = age;

		this.constructor.animals.push({ name: name, hungry: hungry });
	}

	eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	}

	sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	}

	static animals = []; //Propriedade estática

	//Método estático
	static nextToEat(animalsToEat) {
		const sortedByHungry = animalsToEat.sort((a, b) => {
			return b.hungry - a.hungry;
		});
        // .sort organiza do menor para o maior
		console.log(`O próximo animal a comer é: ${sortedByHungry[0].name}`);
	}
}

// console.log(Animal.animals);

const animal1 = new Animal('cachorro', 'Aslam', 3, 10);
const animal2 = new Animal('gato', 'Caju', 3, 15);
const animal3 = new Animal('tigre', 'Fred', 3, 2);
const animal4 = new Animal('coruja', 'Frida', 3, 1);

// console.log(Animal.animals);

Animal.nextToEat(Animal.animals);