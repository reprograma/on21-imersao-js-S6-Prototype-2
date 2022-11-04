import { Person } from './Person.js';
import { Bank }  from './Bank.js';


export class Client extends Person{
    
    constructor(name, cpf){
        super(name, cpf);
        
    }
    
    arraybanks = [];

    addBank(bank){
        if(bank instanceof Bank){
            if(this.arraybanks.includes(bank)){
                throw new Error('O cliente já é membro desse banco.')
            } else {
                this.arraybanks.push(bank);
                bank.qtdCustomer++;
                this.arraybanks.indexOf(bank.qtdCustomer++);
                
                
            }
        } else {
            throw new Error('Não é uma instância de Bank.')
        }
    }

    removeBank(bank){
        if(bank instanceof Bank){
            if(this.arraybanks.includes(bank)){
                bank.qtdCustomer--;
                this.arraybanks.indexOf(bank.qtdCustomer--);
            }else{
                throw new Error('Banco removido')
            }
        } else {
            throw new Error('Não é uma instância de Bank.')
        }
    }
}