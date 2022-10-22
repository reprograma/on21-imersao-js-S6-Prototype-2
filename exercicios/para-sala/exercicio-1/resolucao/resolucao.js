class Driver {
  name;
  age;
  rides = 0;
  amountReceived = 0;
  constructor(name, age) {
    if (age >= 18) {
      this.name = name;
      this.age = age;
    } else {
      return new Error(
        "Você precisa ter 18 anos ou mais para se cadastrar como motorista."
      );
    }
  }
}

class Passenger {
  name;
  age;
  password;
  amountPayed = 0;
  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  requestRide(driver, amount, password) {
    if (password === this.password && driver instanceof Driver) {
      driver.rides++;
      driver.amountReceived += amount;
      this.amountPayed -= amount;
      return `Corrida feita`;
    } else if (password != this.password) {
      return `Senha incorreta`;
    } else if (!(driver instanceof Driver)) {
      return `Motorista não existe em nosso sistema.`;
    }
  }
}

const DriverMaria = new Driver("Maria", 26);

const PassengerHeloisa = new Passenger("Heloisa", 28, "111");
const PassengerClaudia = new Passenger("Cláudia", 25, "222");

PassengerHeloisa.requestRide(DriverMaria, 70, "111");
PassengerClaudia.requestRide(DriverMaria, 40, "222");

console.log(PassengerClaudia);
console.log(PassengerHeloisa);
console.log(DriverMaria);
