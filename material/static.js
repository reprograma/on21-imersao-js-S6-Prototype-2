class Animal {
    type;
    name;
    age;
    energy = 0;

    constructor(type, name, age, hungry) {
        this.type = type
        this.name = name;
        this.age = age;

        this.constructor.animals.push({name: name, hungry: hungry}); //insire os nomes dentro do objeto animals
    }


    eat() {
        console.log(`O ${this.type} chamado ${this.name} esta comendo`)
    }

    sleep(hours) {
        console.log(`O ${this.type} chamado ${this.name} esta dormindo`)
        this.energy +=hours;
        console.log(`Energia atual: ${this.energy}`)
    }

    static animals = []; //propriedade estatica

    //método estatico
    static nextToEat(animalsToEat) {
        const sortedByHungry = animalsToEat.sort((a, b) => {
            return b.hungry - a.hungry;
        });

        console.log(`O próximo animal a comer é ${sortedByHungry[0].name}`)
    }

}

console.log(Animal.animals);

const animal1 = new Animal('cachorro', 'Aslam', 3, 10)
const animal2 = new Animal('gato', 'Lelo', 2, 15)
const animal3 = new Animal('tigre', 'Merida', 3, 5)
const animal4 = new Animal('coruja', 'Anaconda', 3, 1)

console.log(Animal.animals);
console.log(Animal.animals.length);

Animal.nextToEat(Animal.animals)

