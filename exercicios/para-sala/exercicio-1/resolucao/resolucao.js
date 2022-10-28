class Motorista {
    nome;
    idade;
    qtdeCorridasRealizadas = 0
    valorRecebidoCorridas = 0

    constructor(nome, idade) {
        if (idade >= 18) {
            this.nome = nome
            this.idade = idade
        } else {
            return new Error(
                'A motorista não possui idade suficiente para se cadastrar.'
            )
        }
    }
}

class Passageira {
    nome;
    idade;
    senha;
    valorGastoEmCorridas = 0

    constructor(nome, idade, senha) {
        this.nome = nome
        this.idade = idade
        this.senha = senha
    }

    solicitarCorrida(motorista, valor, senha) {

        if (senha === this.senha) {
            if (motorista instanceof Motorista) {
                motorista.qtdeCorridasRealizadas += 1
                motorista.valorRecebidoCorridas += valor
                this.valorGastoEmCorridas -= valor
                return 'Corrida solicitada com sucesso'
            }
            return new Error(
                'Motorista não atende aos critérios necessários.'
            )
        } else {
            return new Error('Senha Incorreta')
        }
    }

}

const Debora = new Passageira('Débora', 25, 123456)
const Josi = new Motorista('Josi', 19)
const Paty = new Passageira('Paty', 22, 12345)

console.log(Debora.solicitarCorrida(Josi, 50, 123456))
console.log(Josi.qtdeCorridasRealizadas)
console.log(Josi.valorRecebidoCorridas)
console.log(Debora.valorGastoEmCorridas)
