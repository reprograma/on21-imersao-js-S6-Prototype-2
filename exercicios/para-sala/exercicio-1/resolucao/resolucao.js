class Driver {
    name;
    age;
    races;
    amount;
    
    constructor(name, age, races = 0, amount = 0){
        this.name = name;
        this.age = age
        this.races = races;
        this.amount = amount; 
        
        // if(this.age >= 18){
        //     return this.age = age
        // } else {
        //     throw `Motorista deve ser maior de 18 anos`
        // }
        
        
    }
}

const driver1 = new Driver('Amanda', 18);
console.log(driver1);


class Passenger {
    name;
    age;
    password;
    amount;

    constructor(name, age, password, amount = 0){
        this.name = name;
        this.age = age;
        this.password = password;
        this.amount = amount
    }

    requestDriver(driver, amount, password){
        if(driver instanceof Driver){
            this.driver = driver
        }else{
            return `Motorista deve ser instancia da classe Drive`
        }
        
        this.amount -= amount

        if(this.password == password){
            return `Motorista solicitado com sucesso`
        }else{
            return `Senha incorreta`
        }
    }
}

const passenger1 = new Passenger('Vitoria', 22, 123456)
console.log(passenger1);
console.log(passenger1.requestDriver(driver1, 15, 123456));

// motorista o amount vai ser positivo, saindo de um e indo pra outro 
//aumentar em 1 o numero da corrida
