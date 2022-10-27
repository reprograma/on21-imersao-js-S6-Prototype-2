class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(city) {
        console.log(`A pessoa de nome ${this.name} está falando na cidade de ${city}`);
    }
}

class User extends Person {
    email;
    password
    constructor(name, age, email, password) {
        super(name, age);
        this.email = email;
        this.password = password;
    }

    speak(city) {
        super.speak(city)
        console.log(`A pessoa é uma usuaria do e-mail ${this.email}`)
    }

}

const user1 = new User('larissa', 35, 'larissa@email.com', 159)

user1.speak('Cariacica')

console.log(user1)

console.log(user1 instanceof User);
console.log(user1 instanceof Person);