class Driver{
name;
age;
numberOfRides = 0;
amount =0;

constructor(name,age){
    if(age>18)
    {
        this.age = age;
        this.name = name;
    }
    else{
        return new Error( 'Voce precisa ter 18 anos ou mais para se cadastrar como motorista');
    }
}
}
class Passenger{
name;
age;
password;
amount = 0 ;

constructor(name, age, password){
    this.name = name;
    this.age = age;
    this.password = password;
}
requestRide(driver,amount,password)
{
    if(password === this.password)
    {
    // solicitar corrida
     if(driver instanceof Driver)
     {
        this.amount-=amount;
        driver.amount += amount;
        driver.numberOfRides ++;

     }
     else{
        console.log('Informe um motorista corretamente')
     }
    }
    else{
        console.log('A senha está incorreta');
        
    }
}
}
const motorista1 = new Driver('Anna' ,40);
const motorista2 = new Driver('Jose', 36);
const motorista3= new Driver('Maria', 26);

//console.log('motorista1', motorista1)
//console.log('motorista2', motorista2)
//console.lo0.g('motorista3', motorista3)

const passsageiro1 = new Passenger('Luana',27, 111)
const passsageiro2 = new Passenger('Aline',15, 222)
const passsageiro3 = new Passenger('Angela', 37, 222)

//console.log(passsageiro1)

//passsageiro1.requestRide(motorista1, 25, 111);

//passsageiro2.requestRide(motorista1, 12, 222);

passsageiro3.requestRide(motorista3 ,12, 222)
console.log('motorista2', motorista2);
console.log('passageira2', passsageiro3);