class Bank{
    codigo;
    nome;
    #txtrans;
    constructor(codigo,nome, txtrans){
        this.nome = nome;
        this.codigo=codigo;
        this.#txtrans = txtrans;
       this.constructor.createBank.push({ code: codigo, qtdClients: 0 });
        
    }

    static createBank = [];
}

module.exports = Bank;