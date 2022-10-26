class Driver {
    nome;
    idade;
    corridasRealizadas = 0;
    valorRecebidoCorridas = 0;

    constructor(nome , idade){
        if(idade >= 18){
            this.nome = nome;
            this.idade = idade;

        } else{
            throw 'Você não é maior de idade para dirigir.'
        }
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
const passageira1 = new Passenger("Evelin", 30, 1234);

passageira1.requestDrive(motorista1, 100, 1234);
console.log(passageira1)
console.log(motorista1);