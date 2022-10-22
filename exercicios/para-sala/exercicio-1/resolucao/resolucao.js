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
      return new Error('So é permitido a partir de 18 anos ou mais');
    }
  }
}

// const drive1 = new Driver('Valenthina', 17)
// console.log('Motorista 1: ', drive1)
// const drive2 = new Driver('Amanda', 30)
// console.log('Motorista 2: ', drive2)

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
        //solicitar corrida
        this.amount -= amount;
        driver.amount += amount;
        driver.numberOfRides++;
      } else {
        console.log('Informe uma motorista corretamente');
      }
    } else {
      console.log('A senha está incorreta');
    }
  }
}

const motorista1 = new Driver('Maria', 43);
const motorista2 = new Driver('Jose', 36);
const motorista3 = new Driver('Marta', 26);
// console.log('Motorista 1: ', motorista1);

const passageira1 = new Passenger('Valenthina', 26, 111);
const passageira2 = new Passenger('Erica', 14, 123);
const passageira3 = new Passenger('Claudia', 25, 333);
// console.log('Passageira 1: ', passageira1);

/* passageira1.requestRide(motorista1, 25, 111);
console.log('Passageira 1: ', passageira1);
console.log('Motorista 1: ', motorista1); */

/*passageira2.requestRide(motorista1, 25, 123);
console.log('Passageira 2: ', passageira2);
console.log('Motorista 1: ', motorista1);*/

passageira3.requestRide(motorista3, 25, 333);
console.log('Passageira 3: ', passageira3);
console.log('Motorista 3: ', motorista3);
