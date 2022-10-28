class Driver {
    name;
    age;
    NumberOfRide = 0;
    #amount = 0;

    constructor(name, age) {
        if(age < 18) {
            return new Error('Você precisa ter 18 anos ou mais para se cadastrar como motorista')
        } else {
            this.name = name;
            this.age = age
        }
    }
    get amount(){ return this.#amount ;}
    set amount(amount){return this.#amount = amount;}

}

class Passenger {
    name;
    age;
    #password;
    #amount = 0;

    constructor(name, age, password) {
        this.name = name
        this.age = age;
        this.#password = password
    }

    get amount(){ return this.#amount ;}
    set amount(amount){return this.#amount = amount;}

	encryptPassword() {
		return (this.#password = `*** ${this.#password} + ***`);
	}

	get password() {return this.#password}

	set password(newPassword) {this.#password = newPassword}

    requestRide(driver, amount, password) {
        if(password === this.#password) {
            if(driver instanceof Driver){
                //solicitar corrida
                this.#amount -= amount;
                driver.amount += amount;
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

// console.log(motorista1);
// console.log(motorista2);
// console.log(motorista);
motorista2.amount = 50;

const passageira = new Passenger('Daiane', 15, 258);
const passageira1 = new Passenger('Rose', 45, 456);
const passageira2 = new Passenger('Jaqueline', 35, 458);
 console.log(passageira.encryptPassword());
// console.log(passageira1);
// console.log(passageira2);
passageira2.amount = 20;

passageira2.requestRide(motorista2, 15, 458)
console.log(passageira2.amount);
console.log(motorista2.amount)