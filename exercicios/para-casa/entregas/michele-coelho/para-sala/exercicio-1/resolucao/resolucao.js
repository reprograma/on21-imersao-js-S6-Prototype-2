class Driver {
    nome;
    idade;
    qtdDeCorridaRealizadas;
    valorRecebidosCorridas;

    constructor(nome, idade) {
        if (idade>=18) {
            this.nome = nome;
            this.idade = idade;
            this.qtdDeCorridaRealizadas = 0;
            this.valorRecebidosCorridas = 0;
        }
        else {
          console.log('Idade menos que 18 anos, não pode ser motorista!');
        }
    }
}

class Passanger {
    nome;
    idade;
    senha;
    ValorGastoCorridas;
    constructor(nome, idade, senha) {

        this.nome = nome;
        this.idade = idade;
        this.senha = senha;
        this.ValorGastoCorridas = 0;
    }

    requestDrive(driver, valorCorrida, password) {
        if (this.senha===password) {
            if (driver instanceof Driver) {
                this.ValorGastoCorridas -=valorCorrida;
                driver.valorRecebidosCorridas+=valorCorrida;
                driver.qtdDeCorridaRealizadas++;
                console.log("Corrida realizada com sucesso");
            }else{
                console.log("O parâmetro driver precisa, obrigatoriamente, ser do tipo Driver");
            }
        }else{
            console.log( "Error, digite a senha correta!");
        }
    }
}
const motorista1= new Driver("Julia", 18)
const motorista2= new Driver("Marina", 34)
const motorista3= new Driver("Cecili", 27)

const passageiro1=new Passanger(motorista1,31,111);
const passageiro2=new Passanger(motorista1,31,222);
const passageiro3=new Passanger(motorista1,31,333);

