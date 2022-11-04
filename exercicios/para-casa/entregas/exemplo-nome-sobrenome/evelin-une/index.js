import { Bank } from './Bank.js';
import { Client } from './Client.js';




const bank1 = new Bank(100, "bancoAleatorio", 0.01);
const bank2 = new Bank(200, 'bancoMais', 0.02);
const client1 = new Client('Emily', 87654321);

client1.addBank(bank2);
client1.removeBank(bank2);
client1.addBank(bank1);

console.log(client1);

