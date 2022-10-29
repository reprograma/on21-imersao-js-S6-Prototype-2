class Driver {
	name;
	age;
	numberOfRides = 0;
	amount = 0;

	constructor(name, age) {
		if (age >= 18) {
			this.name = name;
			this.age = age;
			this.constructor.drivers.push({ name: name, age: age });
		} else {
			return new Error(
				'Você precisa ter 18 anos ou mais para se cadastrar como motorista'
			);
		}
	}

	static drivers = [];

	static numberOfDrivers(drivers) {
		console.log(`O total de motoristas cadastradas é: ${drivers.length}`);
	}

	static ageAverage(drivers) {
		const ageSum = drivers.reduce((total, next) => total + next.age, 0);
		const totalOfDrivers = drivers.length;
		const ageAverage = ageSum / totalOfDrivers;
		console.log(`A média de idade das motoristas é de: ${ageAverage}`);
	}
}

class Passenger {
	name;
	age;
	password;
	amount = 0;

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;
		this.constructor.passengers.push({ name: name, age: age });
	}

	static passengers = [];

	static numberOfPassengers(passengers) {
		console.log(`O total de passageiras cadastradas é: ${passengers.length}`);
	}

	static ageAverage(passengers) {
		const ageSum = passengers.reduce((total, next) => total + next.age, 0);
		const totalOfPassengers = passengers.length;
		const ageAverage = ageSum / totalOfPassengers;
		console.log(`A média de idade das passageiras é de: ${ageAverage}`);
	}

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
const motorista4 = new Driver('Ana', 32);
const motorista5 = new Driver('Paula', 19);

const passageira1 = new Passenger('Luara', 27, 111);
const passageira2 = new Passenger('Erica', 15, 222);
const passageira3 = new Passenger('Claudia', 25, 333);

// console.log(Driver.drivers);
// console.log(Passenger.passengers);

// Driver.numberOfDrivers(Driver.drivers);
// Passenger.numberOfPassengers(Passenger.passengers);

Driver.ageAverage(Driver.drivers);
Passenger.ageAverage(Passenger.passengers);