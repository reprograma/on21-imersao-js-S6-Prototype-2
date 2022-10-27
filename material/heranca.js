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

    static pessoa = 'Oi, eu sou uma pessoa'
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

//console.log(user1)
//user1.speak()
user1.speak('Cariacica')

//console.log(User.pessoa)

console.log(user1 instanceof User);
console.log(user1 instanceof Person);