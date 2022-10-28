const Client = require("./client");
const Bank = require ("./bank");

class BankAccount {
    cdCliente;
    cdBanco;
    nrConta;
    nrAgencia;
    #saldo =0;
    #qtRetirada =0;
    #txRetidada = 4;
    #qtdRetirada24h = 4;

    constructor(cliente , banco , nrConta , nrAgencia ){
        if(cliente instanceof Client){
            if(banco instanceof Bank) {
            this.cdCliente = cliente;
            this.cdBanco = banco;
            this.nrAgencia = nrAgencia;
            this.nrConta= nrConta;
            }
            else
            { throw "Banco não encontrado";}
        }
        else
        {throw "Cliente não encontrado";}
        
    }
    Credit(valor){
        this.#saldo += valor;
        console.log("Novo saldo da conta, após o credito", this.#saldo )
    }

    Debit(valor){
      const novoSaldo = this.#saldo -valor;  
      
      if(novoSaldo< 0)
        {console.log ('Valor não pode ser debitado');}
      else
        this.#saldo -=valor;
        {console.log("Novo saldo da conta, após o débito", this.#saldo )}     
    }

    transferTo(outraConta, saldo) {
    if (outraConta instanceof BankAccount && this.#saldo >= saldo) {
          if (outraConta.cdBanco.codigo === this.cdBanco.codigo) {
            this.#saldo -= saldo;
          } else {
           this.#saldo = this.#saldo - saldo - (saldo * this.cdBanco.txTransferencia);
          }
    
          outraConta.#saldo = saldo;
          console.log(`O saldo atual da conta de origem é de R$${this.#saldo}`);
          console.log(`O saldo atual da conta de destino é de R$${outraConta.#saldo}`);

        } else if (!(outraConta instanceof BankAccount)) {
          console.log(`outra Conta não é uma instância de BankAccount`);
        } else if (this.#saldo < saldo) {
          console.log(`Saldo insuficiente para prosseguir operação. Saldo atual: ${ this.#saldo }` );
        }
      }
    
      cashWithdrawal(saldo) {
        if (this.#saldo < saldo) {
          console.log("Você não possui saldo para sacar");
        } else {
          this.#qtRetirada++;
    
          if (this.#qtRetirada <= this.#qtdRetirada24h) {
            this.#saldo -= saldo;
          } else {
   
             this.#saldo = this.#saldo - saldo - (saldo*this.cdBanco.txTransferencia);
          }
          const contador = this.#qtdRetirada24h - this.#qtRetirada;
          let textoResultado = "";
          if (contador > 0) {
            textoResultado = `Você ainda possui ${contador} retirada(s) gratuitas`;
          } else {
            textoResultado = "Você não possui mais nenhuma retirada gratuita.";
          }
          console.log(
            `As primeiras ${this.#qtdRetirada24h} retiradas são gratuitas.
          Retirada realizada. O saldo atual da conta é de R$ ${this.#saldo}.
          Total de retiradas realizadas: ${this.#qtRetirada}
         ${textoResultado}`
          );
        }
      }
    
      closeAccount() {
        if (this.#saldo > 0) {
          console.log("A conta não pode ser encerrada");
        } else {
          console.log("Conta encerrada");
          this.cdCliente.removeBank(this.banco);
        }
      }
    }

module.exports = BankAccount;