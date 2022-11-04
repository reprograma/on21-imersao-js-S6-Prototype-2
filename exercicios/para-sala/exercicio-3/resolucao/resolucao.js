class Person {
    nome;
    idade;
    dinheiro = 0;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    static numberOf(array){
        console.log(`O total é : ${array.length}`);
    }

    static ageAverage(array, type){
        const somaIdade = array.reduce((total, next) => total + next.idade , 0);
        const totalDe = array.length;
        const mediaIdade = somaIdade / totalDe;
        console.log(`A média de idade das ${type} é de: ${mediaIdade.toFixed(0)}`);
    }

}

class Driver extends Person {
    corridasRealizadas = 0;

    constructor(nome , idade){
        if(idade >= 18){
            super(nome, idade);
            this.constructor.drivers.push({nome: nome, idade: idade});

        } else{
            throw 'Você não é maior de idade para dirigir.'
        }
    }

    static drivers = []; 
}

class Passenger extends Person{
    senha;

    constructor(nome, idade, senha){
        super(nome, idade);
        this.senha = senha;
        this.constructor.passengers.push({nome: nome, idade: idade})
    }
    
    static passengers = [];

    requestDrive(motorista, valor, senha){
        if(senha === this.senha){
            if(motorista instanceof Driver){
                this.dinheiro -= valor;
                motorista.dinheiro += valor;
                motorista.corridasRealizadas++;
                
            } else {
                console.log('Informe uma motorista corretamente');
            }
        } else {
            console.log("Senha incorreta");
        }
        
    }
}    

const motorista1 = new Driver("Emily", 20);
const motorista2 = new Driver("Iasmin", 29);
const motorista3 = new Driver("Larissa", 27);
const passageira1 = new Passenger("Evelin", 19, 1234);
const passageira2 = new Passenger("maria", 20, 444);

Person.ageAverage(Driver.drivers, "motoristas");
Person.ageAverage(Passenger.passengers, "passageiras");
