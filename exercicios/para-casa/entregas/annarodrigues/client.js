const Person = require('./person')
const Bank = require ("./bank");

class Client extends Person{
    bancos =[];
    constructor(nome, cpf){
    super(nome,cpf)
    }

    addBank(bank){
        if (bank instanceof Bank){
            if (!this.bancos.indexOf(bank))
                {console.log('Cliente já cadastrado esse banco.');}
            else
            {
               this.bancos.push(bank)
               const indexBank = Bank.createBank.findIndex((b) => b.code === bank.codigo);
               Bank.createBank[indexBank].qtdClients ++;
            }
        }
        else
        {console.log( 'Banco não existe');}
    }


    removeBank(bank){
        if (bank instanceof Bank){
               const auxIndex = this.bancos.indexOf(bank);
               const nomeBanco =  this.bancos[auxIndex].nome;
               if (auxIndex != -1) {
                this.bancos = this.bancos.filter((b) => b.codigo != bank.codigo);
                Bank.createBank[auxIndex].qtdClients--;
                console.log( `Banco ${nomeBanco} removido`)
                }
                 else
                 {      
                    console.log( 'Cliente não possui esse Banco');}
        }
        else{ console.log('Banco não encontrado');}
    }
}

module.exports =Client;