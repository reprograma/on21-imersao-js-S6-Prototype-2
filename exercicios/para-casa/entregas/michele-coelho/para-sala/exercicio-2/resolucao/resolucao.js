class Driver {
    nome;
    idade;
    qtdDeCorridaRealizadas;
    valorRecebidosCorridas;

    constructor(nome, idade) {
        if (idade >= 18) {
            this.nome = nome;
            this.idade = idade;
            this.qtdDeCorridaRealizadas = 0;
            this.valorRecebidosCorridas = 0;
            this.constructor.arrDriver.push({ nome: this.nome, idade: this.idade });
        }
        else {
            console.log('Idade menos que 18 anos, não pode ser motorista!');
        }
    }

    static arrDriver = [];

    static qtdDriver() {
        console.log(`A quantidade de driver é: ${this.arrDriver.length}`);
    }

    static mediaIdadeDriver(arr) {
        const totalSoma = arr.reduce((atual, proximo) => atual + proximo.idade, 0);
        const media = totalSoma / arr.length;
        console.log(`Média idade das motoristas: ${media}`);
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
        this.constructor.arrPassanger.push({ nome: this.nome, idade: this.idade });
    }

    requestDrive(driver, valorCorrida, password) {
        if (this.senha === password) {
            if (driver instanceof Driver) {
                this.ValorGastoCorridas -= valorCorrida;
                driver.valorRecebidosCorridas += valorCorrida;
                driver.qtdDeCorridaRealizadas++;
                console.log("Corrida realizada com sucesso");
            } else {
                console.log("O parâmetro driver precisa, obrigatoriamente, ser do tipo Driver");
            }
        } else {
            console.log("Error, digite a senha correta!");
        }
    }
    static arrPassanger = [];
    static qtdPassanger() {
        console.log(`A quantidade de driver é: ${this.arrDriver.length}`);
    }
    static mediaIdadePassanger(arr) {
        const totalSoma = arr.reduce((atual, proximo) => atual + proximo.idade, 0);
        const media = totalSoma / arr.length;
        console.log(`Média idade das passageiras: ${media}`);
    }
}
const motorista1 = new Driver("Julia", 18)
const motorista2 = new Driver("Marina", 34)
const motorista3 = new Driver("Cecíli", 27)

const passageiro1 = new Passanger(motorista1, 31, 111);
const passageiro2 = new Passanger(motorista1, 71, 222);
const passageiro3 = new Passanger(motorista1, 21, 333);

Driver.qtdDriver();
Driver.mediaIdadeDriver(Driver.arrDriver);
Passanger.mediaIdadePassanger(Passanger.arrPassanger);