
class Driver{
    name;
    age;
    numberOfRides = 0;
    amountRecived = 0;

    constructor(name, age){
        if(age >= 18){
            this.name = name;
            this.age = age;
            this.constructor.drivers.push({name: name, age: age});
        } else {
            return new Error (`A condutora ${name} deve ter no mínimo 18 anos, para poder criar seu cadastro`);
        }
    }
    static drivers = [];

    static qtdMotoristas(motorista){        
        return `No total, há ${motorista.length} motoristas`;
    }

    static mediaIdadeDrivers(drivers){
        const ageSum = drivers.reduce((total, next) => total + next.age, 0);
        const ageAverage = (ageSum / drivers.length).toFixed(0);
        console.log(`A média de idade das motoristas é de: ${ageAverage} anos`);
    }
}

class Passenger{
    name;
    age;
    password;
    amountSpent = 0;    

    constructor(nome, idade, senha){
        this.name = nome;
        this.age = idade;
        this.password = senha;    
        this.constructor.passengers.push({name: nome, age: idade});
    }

    requestRide(driver, valorDaCorrida, senha){
        if( senha === this.password ){
            if(driver instanceof Driver){
                this.driver = driver;
                this.amountSpent -= valorDaCorrida;
                driver.amountRecived += valorDaCorrida;
                driver.numberOfRides ++;
            } else {
                console.log('Informe uma motorista')
            }
        } else{
            console.log('Senha incorreta, a corrida não será feita');
        }
    }

    static passengers = [];

    static qtdPassageiras(passageira){        
        return `No total, há ${passageira.length} passageiras`;
    }

    static mediaIdadePassenger(passageira){
        const ageSum = passageira.reduce((total, next) => total + next.age, 0);
        const ageAverage = (ageSum / this.passengers.length).toFixed(0);
        console.log(`A média de idade das passageiras é de: ${ageAverage} anos`);
    }
}

const luara = new Driver('Luara', 25);
const dani = new Driver('Dani', 45);
const joana = new Driver('Joana', 18);

const passageira1 = new Passenger('Bárbara', 32, 1234);
const passageira2 = new Passenger('Cris', 22, 1111);
const passageira3 = new Passenger('Maria', 17, 2222);

console.log(Driver.drivers);
//console.log(Passenger.passengers);
console.log(Driver.qtdMotoristas(Driver.drivers));
console.log(Driver.mediaIdadeDrivers(Driver.drivers));
console.log(Passenger.qtdPassageiras(Passenger.passengers));
console.log(Passenger.mediaIdadePassenger(Passenger.passengers));