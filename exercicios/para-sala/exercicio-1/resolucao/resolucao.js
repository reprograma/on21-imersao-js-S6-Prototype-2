class Drive {
  name;
  age;
  quantity = 0;
  valueReceivedDrive = 0;
  constructor(name, age) {
    if (age >= 18) {
      this.name = name;
      this.age = age;
    } else {
      return new Error(`A idade tem que ser maior que 18`);
    }
  }
}

class Passenger {
  name;
  age;
  password;
  amountSpentDrive = 0;

  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  requestDrive(driveName, amount, password) {
    if (password === this.password) {
      if (driveName instanceof Drive) {
        this.amountSpentDrive -= amount;
        driveName.valueReceivedDrive += amount;
        driveName.qtd++;
      } else {
        console.log("Informe uma motorista");
      }
    } else {
      console.log("Senha incorreta");
    }
  }
}

const newDrive1 = new Drive("Gabi", 15);
const newDrive2 = new Drive("Maria", 32);

const newPassenger = new Passenger("Stela", "19", "1235!@", 15);
newPassenger.requestDrive(newDrive2, 10, "1235!@");
