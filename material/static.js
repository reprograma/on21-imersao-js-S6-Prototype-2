class Animal {
    type;
    name;
    age;
    hungry;
    energy = 0;

    constructor(type, name, age, hungry) {
        this.type = type
        this.name = name;
        this.age = age;
        this.hungry = hungry

        this.constructor.animals.push(name);
    }


eat() {
    console.log(`O ${this.type} chamado ${this.name} esta comendo`)
}

sleep(hours) {
    console.log(`O ${this.type} chamado ${this.name} esta dormindo`)
    this.energy +=hours;
    console.log(`Energia atual: ${this.energy}`)
}

static animals = [];

}

const animal1 = new Animal('cachorro', 'Aslam', 3, 10)
const animal2 = new Animal('gato', 'Lelo', 2, 15)
const animal3 = new Animal('tigre', 'Merida', 3, 5)
const animal4 = new Animal('coruja', 'Anaconda', 3, 1)

console.log(Animal.animals);
console.log(Animal.animals.length);

const animal5 = new Animal('coruja', 'Anaconda', 3, 1)
const animal6 = new Animal('tigre', 'Simba', 15, 28)
const animal7 = new Animal('gato', 'BruceLane Berenice', 5, 15)
const animal8 = new Animal('cachorro', 'Luna', 13, 45)

console.log(Animal.animals);
console.log(Animal.animals.length);