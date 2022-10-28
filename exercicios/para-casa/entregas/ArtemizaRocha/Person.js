class Person {
   name;
   #cpf;
   
   constructor(name, cpf){
   this.name = name;
   this.#cpf = cpf;
   
   } 

get(){

return this.#cpf;

}

 
   
module.exports = Person;


