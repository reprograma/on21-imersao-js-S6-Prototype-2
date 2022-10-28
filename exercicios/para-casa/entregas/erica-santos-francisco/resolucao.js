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
    static bancosCriados = []; 
    qtyClientes = 0;

    constructor(codigo, nome, taxaTransferencia){
        this.codigo = codigo;
        this.nome = nome;
        this.#taxaTransferencia = taxaTransferencia;
        this.constructor.bancosCriados.push({codigo: codigo, qtyClientes: this.qtyClientes})
    }

    addCliente(){
        this.qtyClientes += 1
    }

    removeCliente(){
        this.qtyClientes -= 1
    }
}

class Client extends Person {

    BancoAssociado = [];

    constructor(nome, cpf){
        super(nome, cpf);
    }

    addBank(bank){
        if(bank instanceof Bank){
            if(this.BancoAssociado.includes(bank)){
                return console.log("Esse cliente já está cadastrado neste banco")
            } else {
            this.BancoAssociado.push(bank);
            bank.addCliente()
            }
        }
    }

    removeBank(bank){
        if(bank instanceof Bank){
            if(this.BancoAssociado.includes(bank)){
                this.BancoAssociado.splice(this.BancoAssociado.indexOf(bank), 1)
                bank.removeCliente()
                return console.log(`Banco foi removido ${bank.nome}`);

            } else {
                return console.log("Não foi possivel remover esse banco. Fere as normas do contratante.")
            }
        }
    }

}

const banco1 = new Bank(100, 'JoinBank', 0.01);
const banco2 = new Bank(200, 'HappyBank', 0.50);

const cliente1 = new Client('Daviny', '123.456.789-01');

cliente1.addBank(banco1);
cliente1.addBank(banco2);


console.log("bank", cliente1.BancoAssociado);
console.log(banco1)

cliente1.removeBank(banco1)

console.log("o que sobrou", cliente1.BancoAssociado);
console.log(banco1);
