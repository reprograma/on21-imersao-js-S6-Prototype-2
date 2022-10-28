class Driver {
    name;
    age;
    numberOfRides = 0;
    amount;
   
    constructor(name, age) {
        if(age >= 18){
            this.name = name;
            this.age = age;
			this.constructor.drivers.push({name : name, age: age})
        } else {
        return new Error ('Você precisa ter 18 anos ou mais para se cadastrar'
		);
       }
    }

	static drivers = [];
	static numberOfDrivers(drivers) {
		console.log(`O total de motoristas cadastrados é ${drivers.length}`);
	}

	static ageAverage(drivers){
		const ageSum = drivers.reduce((total, next) => total + next.age, 0)
		const totalOfDrivers = drivers.length;
		const ageAverage = ageSum / totalOfDrivers;
		console.log ( `A média de idade dos motoristas é de ${ageAverage}`)
	}

	//metodo para somar valores de um array
}


module.exports = Driver;