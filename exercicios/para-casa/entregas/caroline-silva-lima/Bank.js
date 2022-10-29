/*
- [ ] `Bancos criados`
  - Propriedade estática, sendo ela uma array de objetos que é inicialmente vazia e é atualizada a cada vez que um novo banco é criado, contendo:
    - `Código do banco criado`
    - `Quantidade de clientes que esse banco possui`
      - Esse valor deve ser inicializado com 0 e aumentar a medida que um cliente é associado a esse banco.

Exemplo:
```javascript
// A propriedade estática createdBanks é uma array vazia
// antes de nenhum banco ter sido criado:
console.log(Bank.createdBanks); // [ ]

const bank1 = new Bank(100, 'LuaBank', 0.01); // Instanciação de um objeto Bank.
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }

// Agora a propriedade estática createdBanks é uma
// array que contém 1 objeto, que corresponde ao banco criado.
// O objeto possui o código do banco e a quantidade de clientes (que inicialmente é 0):
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]
```*/ 
const Client = require("./Clients");
class Bank{
    #transferRate;
    static createdBanks = [];

    constructor(code, bankName, transferRate ){
      this.code=code
      this.bankName=bankName
      this.#transferRate=transferRate
      const cBancks= this.constructor.createdBanks;
      if (!cBancks.find(b => b.code === code)){
        this.constructor.createdBanks.push({code:code, qtyClients: 0})
      }
    }
};

module.exports=Bank; 