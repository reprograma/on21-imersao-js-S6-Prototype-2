class Driver {
  name;
  age;
  numberOfRides = 0;
  amount = 0;

  constructor(name, age) {
    if (age >= 18) {
      this.name = name;
      this.age = age;
    } else {
      return new Error("Necessario 18 anos ou mais para ser motorista");
    }
  }
}

class Passenger {
  name;
  age;
  password;
  amount = 0;

  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  requestRide(driver, amount, password) {
    if (password === this.password) {
        if (driver instanceof Driver) {
        this.amount -= amount;
        driver.amount += amount;
        driver.numberOfRides++;

      } else {
        console.log("Informe uma motorista corretamente.");
      }
    } else {
      console.log("Senha incorreta");
    }
  }
}


const driver1 = new Driver("Maria", 17);
const driver2 = new Driver("Joice", 25);
// console.log("Driver 1: ", driver1);
// console.log("Driver 2: ", driver2);

const passenger1 = new Passenger('Amanda', 25, 123456);
const passenger2 = new Passenger('Julia', 55, 555555);
// console.log("Passenger 1: ", passenger1);
// console.log("Passenger 2: ", passenger2);

console.log(driver2);
passenger2.requestRide(driver2, 15, 555555);
console.log(driver2);
passenger1.requestRide(driver2, 15, 123456);
console.log(driver2);