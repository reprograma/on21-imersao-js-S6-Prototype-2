
class Driver{
    name;
    age;
    numberOfRides = 0;
    amountRecived = 0;

    constructor(name, age){
        if(age >= 18){
            this.name = name;
            this.age = age
        } else {
            return new Error (`A condutora ${name} deve ter no mínimo 18 anos, para poder criar seu cadastro`);
        }
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
}

const luara = new Driver('Luara', 25);
console.log(luara);

const dani = new Driver('Dani', 45);
console.log(dani);

const passageira1 = new Passenger('Bárbara', 32, 1234);
const passageira2 = new Passenger('Cris', 22, 1111);
const passageira3 = new Passenger('Maria', 17, 2222);

passageira1.requestRide(luara, 12.5, 1234);
passageira1.requestRide(dani, 20, 1234);
passageira2.requestRide(dani, 50, 1111);
passageira3.requestRide(luara, 18, 2222);
console.log("passageira1: ", passageira1);
console.log("passageira2: ", passageira2);
console.log("passageira3: ", passageira3);
passageira1.requestRide(dani, 30, 1234);
console.log("Motorista Luara : ",luara)
console.log("Motorista Dani : ",dani)