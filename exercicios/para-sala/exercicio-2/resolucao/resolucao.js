class Driver {
    nome;
    idade;
    corridasRealizadas = 0;
    valorRecebidoCorridas = 0;

    constructor(nome , idade){
        if(idade >= 18){
            this.nome = nome;
            this.idade = idade;

            this.constructor.drivers.push({nome: nome, idade: idade});

        } else{
            throw 'Você não é maior de idade para dirigir.'
        }
    }

    static drivers = [];

    static numberofDrivers(motoristas){
        console.log(`O total de motorista cadastradas é : ${motoristas.length}`);
    }
    
}

class Passenger {
    nome;
    idade;
    senha;
    valorGastoCorrida = 0;

    constructor(nome, idade, senha){
        this.nome = nome;
        this.idade = idade;
        this.senha = senha;

        this.constructor.passengers.push({nome: nome, idade: idade})
    }
    
    static passengers = [];

    static numberofPassengers(passageiras){
        console.log(`O total de passageiras cadastradas é : ${passageiras.length}`);
    }

    requestDrive(motorista, valor, senha){
        
        if(senha === this.senha){
            if(motorista instanceof Driver){
                this.valorGastoCorrida -= valor;
                motorista.valorRecebidoCorridas += valor;
                motorista.corridasRealizadas ++;
                
            } else {
                console.log('O parâmetro motorista precisa ser instância da classse Driver');
            }
        } else {
            console.log("Senha incorreta");
        }
        
    }
}    

const motorista1 = new Driver("Emily", 20);
console.log(motorista1);
const motorista2 = new Driver("Iasmin", 29);
const motorista3 = new Driver("Larissa", 27);
const passageira1 = new Passenger("Evelin", 30, 1234);
const passageira2 = new Passenger("maria", 20, 444);

passageira1.requestDrive(motorista1, 100, 1234);
console.log(passageira1)
console.log(motorista1);


Driver.numberofDrivers(Driver.drivers);
Passenger.numberofPassengers(Passenger.passengers);