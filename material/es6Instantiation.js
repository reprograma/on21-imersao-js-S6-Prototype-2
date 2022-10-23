class FullName{
    firstName;
    lastName;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Animal {
    type;
    fullName;
    age;
    energy = 0;
    // especifica antes a classe tem
    constructor(type, nameCompleto, age) {
        if(nameCompleto instanceof FullName) {
            this.type = type;
            this.fullName = nameCompleto;
            this.age = age;
        }else{
            throw 'fullName precisa ser instancia da class FullName'
        }
        
        // this.energy = energy;
        // se o valor de energy nao for colocado como  parametro, ele será default 0
    }

    eat(){

    };

    sleep(){

    }

}
const fullNameAnimal1 = new FullName('Aslam', 'Rangel')

const animal1 = new Animal('cachorro', fullNameAnimal1, 3)
console.log(animal1);
// console.log(animal1 instanceof Animal)


const animal2 = new Animal('gato', 'Liria', 4, 5)
console.log(animal2)