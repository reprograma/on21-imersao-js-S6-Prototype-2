class Animal{
    type;
    name;
    age;
    constructor(type, name, age ,energy)
    {
        this.type = type;
        this.name = name;
        this.age = age;
        this.energy = energy;
        this.constructor.animals.push(name);
    }
    
     static animals = [];
    eat(){
        console.log(`O ${this.type} chamado ${this.name} está comendo`);
    }

    sleep(){
        console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
    }
}


const animal1 = new Animal('cachorro', 'Asisam', 3,9);

console.log(Animal.animals)
//console.log(animal1.eat())

//console.log(animal1 instanceof Animal)