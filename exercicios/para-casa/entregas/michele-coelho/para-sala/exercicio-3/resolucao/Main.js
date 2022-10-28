const Driver=require('./Driver');
const Passanger=require('./Passanger');



const motorista1 = new Driver("Julia", 18);
const motorista2 = new Driver("Marina", 34);
const motorista3 = new Driver("Cecili", 27);
const motorista4 = new Driver("Zu", 37);

const passageiro1 = new Passanger(motorista1, 31, 111);
const passageiro2 = new Passanger(motorista1, 31, 222);
const passageiro3 = new Passanger(motorista1, 31, 333);

(Driver.verQuantidade(Driver.arrDriver));
Passanger.verQuantidade(Passanger.arrPassanger);

Driver.mediaIdade(Driver.arrDriver);
Passanger.mediaIdade(Passanger.arrPassanger);