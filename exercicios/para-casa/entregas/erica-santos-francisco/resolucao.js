class Person {
    nome;
    #cpf;
    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf;
    }

    // getCpf(){
    //     return this.#cpf;
    // }
}

class Bank {

    codigo;
    nome;
    #taxaTransferencia;
    bancosCriados = []; 

    constructor(codigo, nome, taxaTransferencia){
        this.codigo = codigo;
        this.nome = nome;
        this.#taxaTransferencia = taxaTransferencia;
    }
    novosBancos(codigo, qtyClientes){
            this.bancosCriados.push({
                codigo: codigo,
                qtyClientes: qtyClientes
            });

        return this.bancosCriados
    }
}

class Client extends Person {

    BancoAssociada = [];

    constructor(nome, cpf){
        super(nome, cpf);
    }

    addBank(bank){
        this.BancoAssociada.push(bank);
    }

    removeBack(bank){
        const value = this.BancoAssociada.filter((item) => item === bank);
        this.BancoAssociada.splice(bank.indexOf(value), 1);

        return this.BancoAssociada;
    }

}

const banco1 = new Bank(100, 'JoinBank', 0.01);
const banco2 = new Bank(200, 'HappyBank', 0.50);

const cliente1 = new Client('Daviny', '123.456.789-01');

cliente1.addBank(banco1);
cliente1.addBank(banco2);

console.log("bank", cliente1.BancoAssociada);

cliente1.removeBack(banco1)

console.log("o que sobrou", cliente1.BancoAssociada);