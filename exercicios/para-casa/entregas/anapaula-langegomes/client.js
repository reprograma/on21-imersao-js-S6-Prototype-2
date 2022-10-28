const Person = require('./person')

const Bank = require('./bank')

const { groupBanks } = require('./bank')

class Client extends Person {
    Banks = []

    constructor(name, cpf) {
        super(name, cpf)
    }
}    