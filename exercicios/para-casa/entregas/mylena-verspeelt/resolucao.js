const Bancos = require("./Bancos.js")
const Cliente = require("./Cliente.js")
const ContaBancaria = require("./ContaBancaria.js")
const Pessoa = require("./Pessoa.js")

const Joana = new Pessoa('Joana', 123456789)
const Marcia = new Pessoa('Marcia', 987654321)

const bancoNubank = new Bancos(20, 'Nubank', 0.5)
const bancoItau = new Bancos(10, 'Itau', 0.3)
const bancoBradesco = new Bancos(30, 'Bradesco', 0.8)


const clienteJoana = new Cliente('Joana')
const clienteMarcia = new Cliente('Marcia')

const contaBancariaMarcia = new ContaBancaria(clienteMarcia, bancoItau, 3000, 45678)
const contaBancariaJoana = new ContaBancaria(clienteJoana, bancoBradesco, 5000, 12345)




