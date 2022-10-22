
const Driver = require('./Driver')

class Passenger extends Driver{
    name;
    age;
    password;
    valuePay = 0
    constructor(name, age, password){
        this.name = name;
        this.age = age;
        this.password = password;
    }

    requestDrive(driver, amount, password){
        this.amount = amount
        if(password === this.password){
            if(driver instanceof Driver){
                this.amount -= amount   
                driver.amount -= amount;
                driver.numberOfRides++;
            }else{
                console.log('Informe uma motorista corretamente')
            }
    
        }else {
             console.log('Senha incorreta. Por favor, digite novamente para solicitar uma corrida.'); 
        }

    }
}

const passageira = new Passenger('Luana', 19, 12546)
passageira.requestDrive('Mel', 25,12546 )

console.log(passageira);