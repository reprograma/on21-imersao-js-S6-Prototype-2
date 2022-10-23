class Animal {
    type;
    name;
    hungry;
    energy = 0;

    constructor(type, name, age ) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.hungry = hungry;
        this.constructor.animals
    }

    eat(){
        console.log(`O ${this.type} chamado ${this.name} está comendo`)
    }

    sleep(hours){
        console.log(`${this.type} chamado ${this.name} está dormindo` )
        this.energy += hours;
        console.log(`Energia atual: ${this.energy}`)
    }

    static animals = [];
}

console.log(Animal.animals);

const animal1 = new Animal('cachorro')