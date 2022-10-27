class Person {
  constructor(nome, cpf) {}
}

class Bank {
  #taxa_de_transfer;
  nome_dos_bancos;
  #tag_codigos;
  constructor(codigo, nome, taxa_de_transfer) {
    this.codigo = codigo;
    this.nome = nome;
    this.#taxa_de_transfer = taxa_de_transfer;
    this.qtd_clientes = 0;
    this.constructor.qtd_de_clientes_por_bancos = {};
    this.#tag_codigos = {
      nubank: 1,
      itau: 2,
      pan: 3,
      santander: 4,
      gringots: 9 / 34,
    };
    this.constructor.bancos_criados.push({
      nome: this.nome,
      codigo: this.set_Codigo(this.nome),
    });
    this.constructor.nome_dos_bancos.push({ nome: this.nome });
  }
  static nome_dos_bancos = [];
  static bancos_criados = [];
  static qtd_de_clientes_por_bancos;

  set_Qtd_clientes(banco) {
    return Bank.qtd_de_clientes_por_bancos[banco];
  }

  set_Codigo(codigo) {
    return this.#tag_codigos[codigo];
  }
}

const instancias = [
  new Bank(1, "nubank", 1.5),
  new Bank(2, "itau", 1.5),
  new Bank(3, "itau", 1.5),
];

instancias.map((banco) => {
  console.log();
  if (Bank.qtd_de_clientes_por_bancos.hasOwnProperty(banco.nome)) {
    Bank.qtd_de_clientes_por_bancos[banco.nome] =
      Bank.qtd_de_clientes_por_bancos[banco.nome] += 1;
  } else {
    Bank.qtd_de_clientes_por_bancos[banco.nome] = 1;
  }
  return Bank.qtd_de_clientes_por_bancos;
});

const obj = { ...Bank.qtd_de_clientes_por_bancos };
function numero_de_clientes(param) {
  if (obj[param]) {
    return obj[param];
  }
}

const createdBank = () => {
  numero_de_clientes(Bank.nome_dos_bancos);
};
console.log(createdBank());
console.log(Bank.bancos_criados);
console.log(Bank.qtd_de_clientes_por_bancos);
console.log(Bank.nome_dos_bancos);
console.log(numero_de_clientes("itau"));
