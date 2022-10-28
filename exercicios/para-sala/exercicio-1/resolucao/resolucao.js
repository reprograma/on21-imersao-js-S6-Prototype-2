class Driver{
    name;
    age;
    qtyRide = 0;
    amount = 0;

    constructor(name, age){
       if(age >= 18){
        this.name = name;
        this.age = age;
       } else{
        return new Error('you must be 18+ years old to drive');
       }
    }
}

class Passenger {
    name;
    age;
    password;
    amount = 0;

    constructor(name, age, password){
    this.name = name;
    this.age =  age;
    this.password   = password;
    }

    requestRide(driver, amount, password){
        if(password === this.password){
            if(driver instanceof Driver){
                this.amount -= amount;
                driver.amount += amount;
                driver.qtyRide ++;
            } else {
                console.log('Please specify a valid taxi Driver')
            }

        } else {
            console.log('Please enter a valid password')
        }
    }
}

const motorista1 = new Driver('Maria', 34);
const motorista2 = new Driver('João', 20);
const motorista3 = new Driver('Marta', 40);

const passageira1 = new Passenger('Luara', 27, 123);
const passageira2 = new Passenger('Ana', 15, 222);
const passageira3 = new Passenger('Ana', 15, 333);

passageira1.requestRide(motorista1, 25, 123);
console.log('Passageira 1:', passageira1);

passageira2.requestRide(motorista2, 12, 222);
console.log('Passageira 2:', passageira2);
console.log('Motorista 2:', motorista1);


// const motorista1 = new Driver('Maria', 34);
// const motorista2 = new Driver('João', 17);
// console.log("Motorista 1:", motorista1)
// console.log("Motorista 2:", motorista2)


