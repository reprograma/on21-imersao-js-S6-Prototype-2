//exercícios feitos pela profa aqui


class Person {
	name;
	age;
	amount = 0;
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	static numberOf(array) {
		console.log(`O total é: ${array.length}`);
	}

	static ageAverage(array, type) {
		const ageSum = array.reduce((total, next) => total + next.age, 0);
		const totalOf = array.length;
		const ageAverage = ageSum / totalOf;
		console.log(`A média de idade das ${type} é de: ${ageAverage}`);
	}
}

class Driver extends Person {
	numberOfRides = 0;

	constructor(name, age) {
		if (age >= 18) {
			super(name, age);
			this.constructor.drivers.push({ name: name, age: age });
		} else {
			return new Error(
				'Você precisa ter 18 anos ou mais para se cadastrar como motorista'
			);
		}
	}

	static drivers = [];
}

class Passenger extends Person {
	password;

	constructor(name, age, password) {
		super(name, age);
		this.password = password;
		this.constructor.passengers.push({ name: name, age: age });
	}

	static passengers = [];

	requestRide(driver, amount, password) {
		if (password === this.password) {
			if (driver instanceof Driver) {
				// solicitar corrida
				this.amount -= amount;
				driver.amount += amount;
				driver.numberOfRides++;
			} else {
				console.log('Informe uma motorista corretamente');
			}
		} else {
			console.log('A senha está incorreta');
		}
	}
}

const motorista1 = new Driver('Maria', 43);
const motorista2 = new Driver('Jose', 36);
const motorista3 = new Driver('Marta', 26);
const motorista4 = new Driver('Leyliane', 32);
const motorista5 = new Driver('Giovanna', 19);

const passageira1 = new Passenger('Artemiza', 27, 111);
const passageira2 = new Passenger('Alice', 15, 222);
const passageira3 = new Passenger('Ludmila', 25, 333);

// Driver.numberOf(Driver.drivers)
// Person.numberOf(Passenger.passengers)

Person.ageAverage(Driver.drivers, 'motoristas');
Person.ageAverage(Passenger.passengers, 'passageiras');
