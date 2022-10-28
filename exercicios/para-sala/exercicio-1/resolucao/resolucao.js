class Driver {
    nameDriver;
    ageDriver;
    racesDriver = 0;
    receivedAmountDriver = 0;

    constructor(name, age){
        if (age >= 18){
            this.nameDriver = name;
            this.ageDriver = age;
        }else{
            throw 'A motorista não pode ser menor de idade!'
        }
    }
}

class Passenger{
    namePassenger;
    agePassenger;
    passwordPassenger;
    amountPaidPassenger = 0;

    constructor(name, age, passwordPassenger){
        this.namePassenger = name;
        this.agePassenger = age;
        this.passwordPassenger = passwordPassenger;
    }

    requestDrive(driver, amount, password){
        if (password == this.passwordPassenger){
            if (driver instanceof Driver){
                driver.racesDriver += 1;
                driver.receivedAmountDriver += amount;
                this.amountPaidPassenger -= amount;
                return 'Corrida solicitada! Sua motorista vai chegar em instantes.'
            }
            throw `Essa não é uma motorista cadastrada.`
        }
        throw 'Senha da passageira incorreta!';
    }
}

const driver = new Driver('Julia', 22)
const passager = new Passenger('Juliana', 5, '1234')
console.log(passager.requestDrive(driver, 40, '1234'));
console.log(driver, passager);

