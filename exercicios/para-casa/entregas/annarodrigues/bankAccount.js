const Client = require("./client");
const Bank = require ("./bank");

class BankAccount {
    cdcliente;
    cdbanco;
    nrconta;
    nragencia;
    #saldo =0;
    #qtretirada =0;
    #txretidada = 4;
    #qtdretirada24h = 4;

    constructor(cliente , banco , nrconta , nragen ){
        if(cliente instanceof Client){
            if(banco instanceof Bank) {
            this.cdcliente = cliente;
            this.cdbanco = banco;
            this.nragencia = nragen;
            this.nrconta= nrconta;
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
        this.#saldo -=valor;
        console.log("Novo saldo da conta, após o débito", this.#saldo )     
    }

    transferTo(outraConta, saldo) {
        if (outraConta instanceof BankAccount && this.#saldo >= saldo) {
          if (outraConta.bank.code === this.bank.code) {
            this.#saldo -= saldo;
          } else {
            this.#saldo = this.#saldo - saldo - saldo * this.bank.txtrans;
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
          this.#qtretirada++;
    
          if (this.#qtretirada <= this.#qtdretirada24h) {
            this.#saldo -= saldo;
          } else {
            this.#saldo = this.#saldo - saldo - this.#txretidada;
          }
          const contador = this.#qtdretirada24h - this.#qtretirada;
          let textoResultado = "";
          if (contador > 0) {
            textoResultado = `Você ainda possui ${contador} retirada(s) gratuitas`;
          } else {
            textoResultado = "Você não possui mais nenhuma retirada gratuita.";
          }
          console.log(
            `As primeiras ${this.#qtdretirada24h} retiradas são gratuitas.
          Retirada realizada. O saldo atual da conta é de R$ ${this.#saldo}.
          Total de retiradas realizadas: ${this.#qtretirada}
         ${textoResultado}`
          );
        }
      }
    
      closeAccount() {
        if (this.#saldo > 0) {
          console.log("A conta não pode ser encerrada");
        } else {
          console.log("Conta encerrada");
          this.cdcliente.removeBank(this.banco);
        }
      }
    }

module.exports = BankAccount;