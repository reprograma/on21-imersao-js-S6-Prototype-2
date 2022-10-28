//exercicios feitos pela profa aqui

class Animal {

    type;
    name;
    age;
    energy;
    hungry;
    constructor(type, name, age, hungry) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.energy=0;
        this.hungry = hungry;

        this.constructor.animals.push({name:this.name, hungry:this.hungry});

    }
    eat(){
        console.log(` ${this.type} chamado ${this.name} está comendo`);
    }
    esleep(hours){
        console.log(` ${this.type} chamado ${this.name} está dormindo`);
        this.energy +=energy;
        console.log(`Energia atual: ${this.hours}`);
    }

    static animals=[];

    static nextToEat(animalsToEat){
        const sortedByHungry=animalsToEat.sort((a,b)=>{return b.hungry - a.hungry;})
        //A função sort pega dois números de da variável hungry e compara o maior deles (b-a) fazendo isso paraem todo o array e volta o novo array na ordem decrescente.
        console.log(sortedByHungry[0].name);//aqui indica qual o anima que tem o maior hangry
    }
}

const animal1=new Animal("Gato","Nina",8,2);
const animal2=new Animal("Gato","Pequena",5,7);
const animal3=new Animal("Gato","Gaby",4,3);
const animal4=new Animal("Cachorro","Zu",6,12);
const animal5=new Animal("Gato","Tom",2,4);
const animal6=new Animal("Cachorro","Branquinho",9,12);

 console.log(Animal.animals);

Animal.nextToEat(Animal.animals);