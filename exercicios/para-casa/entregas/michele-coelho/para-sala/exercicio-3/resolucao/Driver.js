const Person=require('./Person')

class Driver extends Person {

    qtdDeCorridaRealizadas;
    valorRecebidosCorridas;

    constructor(nome, idade) {
        super(nome, idade)
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
}

module.exports=Driver;