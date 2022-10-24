class Driver {
    name;
    age;
    NumberOfRide = 0;
    amount = 0;

    constructor(name, age) {
        if(age < 18) {
            return new Error('Você precisa ter 18 anos ou mais para se cadastrar como motorista')
        } else {
            this.name = name;
            this.age = age
        }
    }
}

class Passenger {
    name;
    age;
    password;
    amount = 0;

    constructor(name, age, password) {
        this.name = name
        this.age = age;
        this.password = password
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

const motorista = new Driver('Maria', 25);
const motorista1 = new Driver('Luciana', 38);
const motorista2 = new Driver('Jamile', 40);

const passageira = new Passenger('Daiane', 15, 258);
const passageira1 = new Passenger('Rose', 45, 456);
const passageira2 = new Passenger('Jaqueline', 35, 458);

passageira2.requestRide(motorista2, 23, 48)