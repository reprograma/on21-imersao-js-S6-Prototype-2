class Person{
    nome;
    #cpf;

    constructor(nome, cpf){
        this.nome=nome;
        this.#cpf=cpf;
    }

    get cpf(){
        return this.#cpf;
    }
    set cpf(numCpf){
        this.#cpf=numCpf;
    }
}

module.exports=Person;