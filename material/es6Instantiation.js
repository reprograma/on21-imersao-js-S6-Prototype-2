class FullName {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Animal {
  type;
  fullName;
  age;
  energy = 0;

  constructor(type, nomeCompleto, age) {
    if (nomeCompleto instanceof FullName) {
      this.type = type;
      this.fullName = nomeCompleto;
      this.age = age;
    } else {
      throw 'fullName precisa ser instância da classe FullName';
    }
  }

  eat() {
    //...
  }

  sleep() {
    //...
  }
}

const fullNameAnimal1 = new FullName('Aslam', 'Rangel');

const animal1 = new Animal('cachorro', fullNameAnimal1, 3);
console.log(animal1);
