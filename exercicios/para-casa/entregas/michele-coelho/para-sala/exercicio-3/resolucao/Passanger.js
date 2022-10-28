const Person = require('./Person')

class Passanger extends Person {
    senha;
    ValorGastoCorridas;
    constructor(nome, idade, senha) {
        super(nome, idade)
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
}
module.exports = Passanger;