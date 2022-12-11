export class closeAccount() {
    if(this.#amount > 0){
      return console.log('Need to withdraw the available balance to close the account.');
    }else{
      this.client.removeBank(this.bank)
      return console.log('Account closed');
  cashWithdrawal(amount) {
    const freeFeeLimit = 2

    if(this.#withdrawals <= freeFeeLimit){
      this.#withdrawals++
      let newFreeFeeLimit = freeFeeLimit - this.#withdrawals

      if(newFreeFeeLimit >= 0){
        this.debit(amount)
        console.log('Withdrawal 24hrs with free Fee, completed successfully.');
      }
    }
    if(this.#withdrawals > freeFeeLimit){
      let addFee = amount * this.#withdrawalsFee
      this.debit(addFee)
      this.#withdrawals++
      console.log('Withdrawal for a fee');
    }
  }

  //   cashWithdrawal(amount){
  //     // realiza retiradas de dinheiro em bancos 24 horas.
    // A cada retirada realizada, informe ao cliente quantas retiradas ele já realizou e se ainda possui retiradas gratuitas.
    // Se sim, informe quantas.
    // Se não, informe a taxa que será cobrada a cada retirada.

  }

  //     // Caso a quantidade de retiradas tenha ultrapassado o limite, a taxa deve ser cobrada.
  //     // A cada retirada realizada, informe ao cliente quantas retiradas ele já realizou e se ainda possui retiradas gratuitas.
  //     // Se sim, informe quantas.
  //     // Se não, informe a taxa que será cobrada a cada retirada.
  //     // Caso não haja valor suficiente para a operação, ela deve retornar uma mensagem para o usuário.
  //     // Imprima na console o resultado.
  //   }
  closeAccount() {
    if (this.#amount > 0) {
      return console.log(
        "Need to withdraw the available balance to close the account."
      );
    } else {
      this.client.removeBank(this.bank);
      return console.log("Account closed");
    }
  }
}

module.exports = BankAccount;