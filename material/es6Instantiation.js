class FullName{
    firstName;
    lastName;

    constructor(firstName, lastName){
        this.firstName  = firstName;
        this.lastName = lastName; 
    }
}


class Animal{
    type;
    fullName;
    age;
    energy = 0;

    constructor(type, nomeCompleto, age){
        if(fullName instanceof FullName){
            this.type = type;
            this.fullName = nomeCompleto;
            this.age = age;
            this.energy = energy;
        } else {
            throw 'fullName must be a instance of FullName class';
        }
    }

    eat(){
    }

    sleep(){
    }
};

const fullNameAnimal = new FullName('Aslam', 'Cardoso');

console.log(fullNameAnimal);

// function Animal (type, name, age){
//     this.type = type,
//     this.name = name,
//     this.age = age
// }

// Animal.prototype.eat = function eat(){

// }

// Animal.prototype.sleep = function sleep(){

// }

// const animal1 = new Animal('cachorro', 'Aslam', 3)
