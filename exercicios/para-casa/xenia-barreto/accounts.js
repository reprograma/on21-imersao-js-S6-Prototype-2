const Person = require("./person");
const Bank = require("./bank");
const Client = require("./client");

const person1 = new Person ('Rodrigo', 35423654)

const bankInter = new Bank(195, 'Inter Bank', 10.00)
const bankItau = new Bank(384, 'Itau Bank', 12.00)
const bankNeon = new Bank(593, 'Neon Bank', 9.00)
const bankBradesco = new Bank(286, 'Bradesco Bank', 11.00)

const client1 = new Client('Xenia', 58698625841)
const client2 = new Client('William', 25638265851)
const client3 = new Client('Amanda', 562352266586)
const client4 = new Client('Juliana', 54655286545)

client1.addBank(bankInter)

