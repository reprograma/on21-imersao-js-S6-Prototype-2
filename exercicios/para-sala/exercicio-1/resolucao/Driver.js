
class Driver{
    name;
    age;
    numberOfRides = 0;
    amount = 0
    constructor(name, age){
        if(age >= 18 ){
            this.name = name
            this.age = age;
        }else{
           return new Error('Para ser motorista precisa ser maior de 18 anos.') 
        }
    }
    
}

const motorista = new Driver ('Mel', 18)
const motorista2 = new Driver ('João', 16)
console.log("Motorista 1:", motorista);
console.log("Motorista 2:", motorista2);

module.exports = { Driver } 