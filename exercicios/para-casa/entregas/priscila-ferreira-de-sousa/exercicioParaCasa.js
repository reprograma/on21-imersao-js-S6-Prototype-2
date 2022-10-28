class Pessoa {
    nome;
    #cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        this.#cpf = cpf;
    }

    get nome() {
        return this.nome;
    }

    set nome(nome) {
        this.nome = nome;
    }
}
console.log(new Pessoa('Monalisa', '423.578.544-12'));

class Banco {
    codigo;
    nome;
    #taxaTransferencia;
    quantidadeClientes;
    constructor(codigo, nome, taxaTransferencia) {
        this.codigo = codigo;
        this.nome = nome;
        this.taxaTransferencia = taxaTransferencia;
        this.quantidadeClientes = 0;
        this.constructor.bancosCriados.push({ codigo: codigo, nome: nome, quantidadeClientes: this.quantidadeClientes /* Adicionar quantidade de clientes aqui */ });
    }

    static bancosCriados = [];

    static getIndexBancoCriado(banco, array) {
        return array.findIndex(b => b.codigo === banco.codigo && b.nome === banco.nome);
    }

    static atualizarQuantidadeClientes(banco, aumentar = true) {
        let indexBanco = Banco.getIndexBancoCriado(banco, Banco.bancosCriados);
        if (aumentar) {
            banco.quantidadeClientes++;
        } else {
            banco.quantidadeClientes--;
        }

        if (indexBanco !== -1) {
            Banco.bancosCriados[indexBanco] = banco;
        }
    }

    get codigo() {
        return this.codigo;
    }

    set codigo(codigo) {
        this.codigo = codigo;
    }

    get nome() {
        return this.nome;
    }

    set nome(nome) {
        this.nome = nome;
    }

    get taxaTransferencia() {
        return this.#taxaTransferencia;
    }

    set taxaTransferencia(taxaTransferencia) {
        this.#taxaTransferencia = taxaTransferencia;
    }
}

class Cliente extends Pessoa {
    bancos;
    constructor(nome, cpf) {
        super(nome, cpf);
        this.bancos = [];
    }

    addBank(banco) {
        if (banco instanceof Banco) {
            if (this.bancos.includes(banco)) {
                return "O cliente já foi associado a este banco";
            }
            this.bancos.push(banco);
            Banco.atualizarQuantidadeClientes(banco);
        }
    }

    removeBank(banco) {
        if (banco instanceof Banco) {
            if (!this.bancos.includes(banco)) {
                return "O cliente não foi associado a este banco";
            }
            let indexBanco = Banco.getIndexBancoCriado(banco, this.bancos);
            this.bancos.splice(indexBanco, 1);
            Banco.atualizarQuantidadeClientes(banco, false);
        }
    }

}

let codigo = 0;
const banco1 = new Banco(++codigo, 'Itaú', 0);
const banco2 = new Banco(++codigo, 'Santander', 1);
const banco3 = new Banco(++codigo, 'Nubank', 2);
const banco4 = new Banco(++codigo, 'Bradesco', 3);

console.log('\n\n Bancos criados ')
console.log(Banco.bancosCriados);

const cliente1 = new Cliente('Julia', '469.154.236-09');
const cliente2 = new Cliente('Eduarda', '465.213.457-09');
const cliente3 = new Cliente('Alice', '444.222.999-09');
const cliente4 = new Cliente('Wanda', '522.777.366-09');
const cliente5 = new Cliente('Kelly', '877.321.654-09');
const cliente6 = new Cliente('Giovana', '347.210.976-09');


cliente1.addBank(banco1);
cliente2.addBank(banco1);
cliente3.addBank(banco1);

cliente1.addBank(banco2);
cliente4.addBank(banco3);

console.log("\n\n Depois de adionar os bancos...");
console.log(cliente1);

console.log("\n\n Array de bancos criados com quantidades atualizadas...");
console.log(Banco.bancosCriados);

console.log("\n\n Removendo um banco associado ao cliente1...");
cliente1.removeBank(banco1);
console.log(banco1);
console.log(cliente1);