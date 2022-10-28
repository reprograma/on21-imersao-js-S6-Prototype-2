class Person {
  name;
  age;
  amount = 0;
  constructor(name, age, amount) {
    this.name = name;
    this.age = age;
    this.amount = amount;
  }

  static numberOf = (array) => {
    console.log(`O total é ${array.length}`);
  };
  static ageAverage = (array) => {
    const ageSum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue.age,
      0
    );
    const totalOf = array.length;
    const ageAverage = ageSum / totalOf;
    console.log(`A media da idade é ${ageAverage}`);
  };
}

class Driver extends Person {
  rides = 0;
  constructor(name, age) {
    if (age >= 18) {
      super(name, age);

      this.constructor.createdDrivers.push({ name: name, age: age });
    } else {
      return new Error(
        "Você precisa ter 18 anos ou mais para se cadastrar como motorista."
      );
    }
  }
  static createdDrivers = [];
}

class Passenger extends Person {
  password;
  constructor(name, age, password) {
    super(name, age);
    this.password = password;

    this.constructor.createdPassengers.push({ name: name, age: age });
  }

  requestRide(driver, amount, password) {
    if (password === this.password && driver instanceof Driver) {
      driver.rides++;
      driver.amount += amount;
      this.amount -= amount;
      return `Corrida feita`;
    } else if (password != this.password) {
      return `Senha incorreta`;
    } else if (!(driver instanceof Driver)) {
      return `Motorista não existe em nosso sistema.`;
    }
  }
  static createdPassengers = [];
}

const DriverMaria = new Driver("Maria", 26);
const DriverHeloisa = new Driver("Heloisa", 19);
const DriverClaudia = new Driver("Claudia", 26);

const PassengerHeloisa = new Passenger("Heloisa", 28, "111");
const PassengerClaudia = new Passenger("Cláudia", 25, "222");

Driver.numberOf(Driver.createdDrivers);
Passenger.numberOf(Passenger.createdPassengers);

Driver.ageAverage(Driver.createdDrivers);
Passenger.ageAverage(Passenger.createdPassengers);
