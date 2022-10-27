class Person{
    name;
    age;
    amount = 0;
    constructor(name, age){        
        this.name = name;
        this.age = age;
    }

    static person = [];

    static numberOf(array){        
        return `O total é ${array.length}.`;
    }

    static mediaAge(array){
        const ageSum = array.reduce((total, next) => total + next.age, 0);
        const ageAverage = (ageSum / array.length).toFixed(0);
        return `A média de idade é de: ${ageAverage} anos`;
    }
}


class Driver extends Person{
    numberOfRides = 0;    
    constructor(name, age){
        if(age >= 18){
            super(name, age)
            this.constructor.drivers.push({name: name, age: age});
        } else {
            return new Error (`A condutora ${name} deve ter no mínimo 18 anos, para poder criar seu cadastro`);
        }
    }
    static drivers = [];
}

class Passenger extends Person{
    password;
    constructor(name, age, password){
        super(name, age)
        this.password = password;    
        this.constructor.passengers.push({name: name, age: age});
    }
    
    static passengers = [];

    numberOf(driver, valorDaCorrida, password){
        if( password === this.password ){
            if(driver instanceof Driver){
                this.driver = driver;
                this.amount -= valorDaCorrida;
                driver.amount += valorDaCorrida;
                driver.numberOfRides ++;
            } else {
                console.log('Informe uma motorista')
            }
        } else{
            console.log('Senha incorreta, a corrida não será feita');
        }
    }
}

const luara = new Driver('Luara', 25);
const dani = new Driver('Dani', 45);
const joana = new Driver('Joana', 18);
const Lais = new Driver('Lais', 18);

const passageira1 = new Passenger('Bárbara', 32, 1234);
const passageira2 = new Passenger('Cris', 22, 1111);
const passageira3 = new Passenger('Maria', 17, 2222);


console.log(Driver.numberOf(Driver.drivers));
console.log(Driver.mediaAge(Driver.drivers));

console.log(Passenger.numberOf(Passenger.passengers));
console.log(Passenger.mediaAge(Passenger.passengers));