class Motorista {
    nome;
    idade;
    qtdeCorridasRealizadas = 0
    valorRecebidoCorridas = 0

    constructor(nome, idade) {
        if (idade >= 18) {
            this.nome = nome
            this.idade = idade

            this.constructor.listaMotoristas.push({ nome: this.nome, idade: this.idade })
            this.constructor.contadorTotalMotoristas += 1
            this.constructor.mediaIdadeMotoristas(this.listaMotoristas)
        } else {
            return new Error(
                'A motorista não possui idade suficiente para se cadastrar.'
            )
        }
    }

    static listaMotoristas = []
    static contadorTotalMotoristas = 0
    static mediaIdadeMotoristas() {
        var soma = 0
        for (let i = 0; i < this.listaMotoristas.length; i++) {
            soma += this.listaMotoristas[i].idade   
        }

        var media = soma / this.listaMotoristas.length 

        return `A média de idade das passageiras é de: ${media} anos`
    }
}

const Mymy = new Motorista('Mymy', 50)
const Josi = new Motorista('Josi', 20)

// console.log(Motorista.listaMotoristas);
// console.log(Motorista.contadorTotalMotoristas);
// console.log(Motorista.mediaIdadeMotoristas());


// ******************************************************************


class Passageira {
    nome;
    idade;
    senha;
    valorGastoEmCorridas = 0

    constructor(nome, idade, senha) {
        this.nome = nome
        this.idade = idade
        this.senha = senha

        this.constructor.listaPassageiras.push({ nome: this.nome, idade: this.idade })
        this.constructor.totalPassageiras += 1
        this.constructor.mediaIdadePassageiras(this.listaPassageiras)

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
    static listaPassageiras = []
    static mediaIdadePassageiras() {
        var soma = 0
        for (let i = 0; i < this.listaPassageiras.length; i++) {
            soma += this.listaPassageiras[i].idade   
        }

        var media = soma / this.listaPassageiras.length 

        return `A média de idade das passageiras é de: ${media} anos`
    }

    static totalPassageiras = 0
}

const Debora = new Passageira('Débora', 25, 123456)
const Paty = new Passageira('Paty', 22, 12345)

// console.log(Passageira.listaPassageiras);
// console.log(Passageira.totalPassageiras);
// console.log(Passageira.mediaIdadePassageiras());


