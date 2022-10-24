class FullName {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
}

class Animal {
    type;
    nomeCompleto;
    age;
    energy = 0;

    constructor(type, nomeCompleto, age) {
        //tipos primitivos (if typeog age == "number") validação
        if(nomeCompleto instanceof FullName) {
            this.type = type;
            this.FullName = nomeCompleto;
            this.age = age;
        } 
        throw 'fullName precisa ser instânciado da classe FullName';        
    }
}