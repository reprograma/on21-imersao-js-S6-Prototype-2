const { Banco } = require('./Banco');
const { Cliente } = require('./Cliente');
const { ContaBanco } = require('./ContaBanco');


//Teste dos métodos criados
let codigo = 0;
const banco1 = new Banco(++codigo, 'Itaú', 0);
const banco2 = new Banco(++codigo, 'Santander', 1);
const banco3 = new Banco(++codigo, 'Nubank', 2);
const banco4 = new Banco(++codigo, 'Bradesco', 3);

console.log('\n\n Bancos criados ')
console.log(Banco.bancosCriados);

const cliente1 = new Cliente('Julia', '469.154.236-09');
const cliente2 = new Cliente('Eduarda', '465.213.457-09');
const cliente3 = new Cliente('Alice', '444.222.999-09');
const cliente4 = new Cliente('Wanda', '522.777.366-09');
const cliente5 = new Cliente('Kelly', '877.321.654-09');
const cliente6 = new Cliente('Giovana', '347.210.976-09');


cliente1.addBank(banco1);
cliente2.addBank(banco1);
cliente3.addBank(banco1);

cliente1.addBank(banco2);
cliente4.addBank(banco3);

console.log("\n\n Depois de adionar os bancos...");
console.log(cliente1);

console.log("\n\n Array de bancos criados com quantidades atualizadas...");
console.log(Banco.bancosCriados);

console.log("\n\n Removendo um banco associado ao cliente1...");
cliente1.removeBank(banco1);
console.log(banco1);
console.log(cliente1);

const contaJuliaSantander = new ContaBanco(cliente1, banco2, 1234, 072);
console.log(contaJuliaSantander);
console.log(contaJuliaSantander.isAtiva);
console.log(contaJuliaSantander.cliente);
console.log(contaJuliaSantander.qtdRetiradasRealizadas);
console.log(contaJuliaSantander.retiradasGratuitasPermitidas);

contaJuliaSantander.creditar(5000);
contaJuliaSantander.debitar(20000);
contaJuliaSantander.sacarDinheiro(100);
contaJuliaSantander.sacarDinheiro(50);
contaJuliaSantander.sacarDinheiro(300);
contaJuliaSantander.sacarDinheiro(1000);
contaJuliaSantander.sacarDinheiro(150);
contaJuliaSantander.fecharConta();