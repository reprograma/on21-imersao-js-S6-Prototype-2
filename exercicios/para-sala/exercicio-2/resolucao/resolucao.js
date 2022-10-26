class Driver {
  name;
  age;
  rides = 0;
  amountReceived = 0;
  constructor(name, age) {
    if (age >= 18) {
      this.name = name;
      this.age = age;

      this.constructor.createdDrivers.push({ name: name, age: age });
    } else {
      return new Error(
        "Você precisa ter 18 anos ou mais para se cadastrar como motorista."
      );
    }
  }
  static createdDrivers = [];
  static quantityDrivers = () => {
    return this.createdDrivers.length;
  };
  static mediaAgeDrivers = () => {
    const sum = this.createdDrivers.reduce(
      (prevValue, currentValue) => prevValue + currentValue.age,
      0
    );
    return sum / this.quantityDrivers();
  };
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

    this.constructor.createdPassengers.push({ name: name, age: age });
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
  static createdPassengers = [];
  static quantityPassengers = () => {
    return this.createdPassengers.length;
  };
  static mediaAgePassengers = () => {
    const sum = this.createdPassengers.reduce(
      (accumulator, currentValue) => accumulator + currentValue.age,
      accumulator
    );
    return sum / this.quantityPassengers();
  };
}

const DriverMaria = new Driver("Maria", 26);
const DriverHeloisa = new Driver("Heloisa", 19);
const DriverClaudia = new Driver("Claudia", 26);

const PassengerHeloisa = new Passenger("Heloisa", 28, "111");
const PassengerClaudia = new Passenger("Cláudia", 25, "222");

PassengerHeloisa.requestRide(DriverMaria, 70, "111");
PassengerClaudia.requestRide(DriverMaria, 40, "222");

console.log(Driver.createdDrivers);
console.log(Passenger.createdPassengers);
console.log(Driver.quantityDrivers());
console.log(Driver.mediaAgeDrivers());

console.log(Passenger.quantityPassengers());
console.log(Passenger.mediaAgePassengers());
