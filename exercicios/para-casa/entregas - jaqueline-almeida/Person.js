class Person {
    name;
    #cpf;

    constructor(name,cpf){
        this.name = name;
        this.#cpf = cpf;
    }

    // getCpf(){
    //     return this.#cpf
    // }
}

module.exports = Person;


    
const client1 = new Person('Maria', 12345678910);
console.log(client1);
// console.log(client1.getCpf());

// const banco1 = new Bank(100, 'JoinBank', 0.01);
// const banco2 = new Bank(200, 'HappyBank', 0.50);

// console.log("ggg", Bank.bancosCriados);
// const cliente1 = new Client('Daviny', '123.456.789-01');
// const cliente2 = new Client('Jaque', '123.456.789-01');

// cliente1.addBank(banco1);
// cliente1.addBank(banco2);

// cliente2.addBank(banco1);

// console.log("bank", cliente2.BancoAssociada);

// cliente2.removeBack(banco2)

// console.log("o que sobrou", cliente2.BancoAssociada);