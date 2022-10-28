//exercícios feitos pela profa aqui

class Driver{
    name;
    age;
    numberOfRides = 0;
    amount = 0;
    
    constructor(name, age,){
        if(age > 18){
            this.name = name;
            this.age = age;
           
    } else{
       return new Error( 
       'Você precisa ter 18 anos ou mais para se cadastrar como motorista'
      );
        }
        
       }
    
    }
    
    class Passenger{
    
        name; 
        age;
        password = 0; 
        amount = 0;
        
        constructor(name, idade, senha){
        this.name = name;
        this.idade = idade;
        this.senha= senha;
        
        }
        requestRide(driver, amount, password){
            if(password === this.senha){
            if(driver instanceof Driver){
            
            this.amount -= amount;
            driver.amount += amount;
            driver.numberOfRides++;
            
            } else{
                console.log('Informe uma motorista corretamente');
            }
          
          } else{
            console.log('A senha está incorreta');
           }
        
          }
        
         }
        
       const motorista1 = new Driver('Miza', 33);
       const motorista2 = new Driver('Jose', 46);
       const motorista3 = new Driver('Maria', 50);
      //console.log('Motorista 2:', motorista2);
       //console.log('Motorista 1:', motorista1);
    
    
       const passageira1 = new Passenger('Alice', 27, 111);
       const passageira2 = new Passenger('Erica', 15, 222);
       const passageira3 = new Passenger('Claudia', 25, 333);
       // console.log('Passageira 1: ', passageira1);
       // console.log('Passageira 2: ', passageira2);
       // console.log('Passageira 3: ', passageira3);
       
       // passageira1.requestRide(motorista1, 25, 111);
       // console.log('Passageira 1: ', passageira1);
       // console.log('Motorista 1: ', motorista1);
       
       // passageira2.requestRide(motorista1, 12, 222);
       // console.log('Passageira 2: ', passageira2);
       // console.log('Motorista 1: ', motorista1);
       
       passageira3.requestRide(motorista3, 23, 333);