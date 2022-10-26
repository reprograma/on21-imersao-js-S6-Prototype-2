class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`A pessoa de nome ${this.name} está falando.`);
  }

  static pessoa = 'Oi, eu sou uma pessoa';
}

class User extends Person {
  email;
  password;
  constructor(name, age, email, password) {
    super(name, age);
    this.email = email;
    this.password = password;
  }

  speak() {
    super.speak();
    console.log(`Essa pessoa é uma usuária de email: ${this.email}`);
  }
}

const user1 = new User('Luara', 27, 'luara@gmail.com', 123);

// console.log(user1);
// user1.speak();

// console.log(User.pessoa)

console.log(user1 instanceof User); //true
console.log(user1 instanceof Person); //true
