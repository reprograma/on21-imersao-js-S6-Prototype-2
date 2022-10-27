class Driver {
  constructor(nome, idade) {
    if (idade >= 18) {
      this.nome = nome;
      this.idade = idade;
      this.qtd_de_corridas = 0;
      this.valor_recebido_em_corridas = 0;
    } else {
      throw new Error("hj não faro");
    }
  }
}
class Passenger {
  constructor(nome, idade, senha) {
    this.nome = nome;
    this.idade = idade;
    this.senha = senha;
    this.valor_gasto_em_corridas = 0;
  }

  requestDrive(driver, amount, password) {
    if (password === this.senha) {
      if (driver instanceof Driver) {
        driver.valor_recebido_em_corridas += amount;
        this.valor_gasto_em_corridas -= amount;
        driver.qtd_de_corridas++;
        return `Você solicitou uma corrida no valor de: ${amount}, com a pessoa motorista: ${driver.nome}`;
      } else {
        return `motorista invalid@`;
      }
    }
    return `senha errada`;
  }
}

const driver_1 = new Driver("Penelope Charmosa", 29);
const passenger_1 = new Passenger("Dick Vigarista", 40, 171);
console.log(passenger_1.requestDrive(1, 50, 171)); // motorista invalid@
console.log(passenger_1.requestDrive(driver_1, 70, 171)); // Você solicitou uma corrida no valor de: 70, com a pessoa motorista: Penelope Charmosa
console.log(passenger_1.requestDrive(driver_1, 70, 172)); //senha errada
console.log(passenger_1.valor_gasto_em_corridas); // -70
console.log(driver_1.valor_recebido_em_corridas); // 70
console.log(driver_1.qtd_de_corridas); // 1
