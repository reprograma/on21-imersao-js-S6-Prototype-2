class Driver {
    name;
    age;
    numberOfRides = 0;
    amount;
   
    constructor(name, age) {
        if(age >= 18){
            this.name = name;
            this.age = age;
        }    else {
        throw 'Você precisa ter 18 anos ou mais para se cadastrar'
       }
    }
}


module.exports = Driver;
