class Person {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    static verQuantidade(arr) {
        console.log(`A quantidade é: ${arr.length}`);
    }
    static mediaIdade(arr) {
        const totalSoma = arr.reduce((atual, proximo) => atual + proximo.idade, 0);
        const media = totalSoma / arr.length;
        console.log(`Média de idade: ${media}`);
    }
}
module.exports=Person;