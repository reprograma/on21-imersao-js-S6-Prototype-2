class Person {
    name;
    age;
    amount;
    constructor(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
    }

}

class Driver extends Person {
    NumberOfRide = 0;

    constructor(name, age) {
        super(name, age)
        if(age < 18) {
            return new Error('Você precisa ter 18 anos ou mais para se cadastrar como motorista')
        } else {
            this.constructor.drivers.push({ name: name, age: age})
        }
    }

    static drivers = []

    static numberOfDrive(drivers){
        console.log(`A quantidade de motorista cadastrado é ${drivers.length}`)
    }

    static ageAverage(drivers){
        const ageSum = drivers.reduce((total, next) => total + next.age, 0);
        const totalOfDrivers = drivers.length;
        const ageAverage = ageSum/totalOfDrivers;
		console.log(`A média de idade das motoristas cadastrados é de: ${ageAverage}`);
    }
}

class Passenger extends Person {
    password;
    amount = 0;

    constructor(name, age, password) {
        super(name, age)
        this.name = name
        this.age = age;
        this.password = password;
        this.constructor.passengers.push({name: name, age: age})
    }

    static passengers = [];

    static numberOfPassenger(passengers){
        console.log(`A quantidade de passageiros cadastro é ${passengers.length}`)
    }

    static ageAverage(passengers){
        const ageSum = passengers.reduce((total, next) => total + next.age, 0);
        const totalOfDrivers = passengers.length;
        const ageAverage = ageSum/totalOfDrivers;
		console.log(`A média de idade dos passageiros cadastrado são de: ${ageAverage}`);
    }

    requestRide(driver, amount, password) {
        this.amount = amount
        if(password === this.password) {
            if(driver instanceof Driver){
                //solicitar corrida
                this.amount -= amount;
                driver.amout += amount;
                driver.NumberOfRide++
                
            } else {
                console.log('Informe uma motorista corretamente')
            }
        } else {
            console.log("Senha está incorreta")
        }
    }
}

const motorista = new Driver('Maria', 50);
const motorista1 = new Driver('Luciana', 50);
const motorista2 = new Driver('Jamile', 50);

const passageira = new Passenger('Daiane', 15, 258);
const passageira1 = new Passenger('Rose', 45, 456);
const passageira2 = new Passenger('Jaqueline', 35, 458);

passageira2.requestRide(motorista2, 23, 458)


Driver.numberOfDrive(Driver.drivers);
Passenger.numberOfPassenger(Passenger.passengers)

Driver.ageAverage(Driver.drivers);
Passenger.ageAverage(Passenger.passengers)