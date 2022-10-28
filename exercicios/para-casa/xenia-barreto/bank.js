class Bank {
  code;
  bankName;
  #fee;
  constructor(code, bankName, fee) {
    this.code = code;
    this.bankName = bankName;
    this.#fee = fee;
    this.constructor.numerOfBanks.push({code: code, bankName: bankName})
  }

  static numerOfBanks = [];
}


/*Bancos criados

Propriedade estática, sendo ela uma array de objetos que é inicialmente vazia e é atualizada a cada vez que um novo banco é criado, contendo:
Código do banco criado
Quantidade de clientes que esse banco possui
Esse valor deve ser inicializado com 0 e aumentar a medida que um cliente é associado a esse banco.
*/

module.exports = Bank