//exercicios feitos pela profa aqui
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
    energy;

    constructor(type, fullName, age) {

        if (fullName instanceof FullName) {

            this.type = type;
            this.fullName = fullName;
            this.age = age;
            this.energy = 2;
        } else {
            throw 'Error, O parâmetro fullName precisa ser instância da classe FullName'
        }
    }
    eat() {
        console.log(`O ${this.type} chamado ${this.fullName.firstName} está comendo`);
    }
    sleep(hours) {
        console.log(`O ${this.type} chamado ${this.fullName.firstName} está dormindo`);
        this.energy += hours;
        console.log(`Energia atual: ${this.energy}`);
    }
}
const fullname1 = new FullName("Tom", "GATINHO")
const animal1 = new Animal("gato", fullname1, 2);
