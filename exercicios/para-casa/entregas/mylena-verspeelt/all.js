import Bancos from ("./Bancos");
import Cliente from ("./Cliente")
import ContaBancaria from ("./ContaBancaria")


const Joana = new Pessoa('Joana', 123456789)
const Marcia = new Pessoa('Marcia', 987654321)

const bancoNubank = new Bancos(20, 'Nubank', 0.5)
const bancoItau = new Bancos(10, 'Itau', 0.3)
const bancoBradesco = new Bancos(30, 'Bradesco', 0.8)

const clienteJoana = new Cliente('Joana')
const clienteMarcia = new Cliente('Marcia')
clienteJoana.addBanco(bancoBradesco)
clienteMarcia.addBanco(bancoItau)

const contaBancariaMarcia = new ContaBancaria(clienteMarcia, bancoItau, 3000, 45678)
const contaBancariaJoana = new ContaBancaria(clienteJoana, bancoBradesco, 5000, 12345)
contaBancariaMarcia.depositar(50)
contaBancariaJoana.depositar(50)

console.log(contaBancariaJoana)
console.log(contaBancariaMarcia)