const Bank = require('./bank')
const Person = require('./person')

class Client extends Person {
  associatedBanks = []

  constructor(name, cpf) {
    super(name, cpf)
  }


  addBank(bank) {
    if (bank instanceof Bank) {
      const bankToAssociate = this.associatedBanks.find(bankToAssociate => bankToAssociate.bankCode === bank.bankCode)
      if (!bankToAssociate) {
        this.associatedBanks.push({ bankCode: bank.bankCode, bankName: bank.bankName })

        const index = Bank.createdBanks.findIndex(createdBank => createdBank.bankCode === bank.bankCode);
        Bank.createdBanks[index].qtyClients++;
        console.log(`Bank ${bank.bankCode} added to client: ${this.name}`)
      } else {
        console.log("You're already a client of this Bank.");
      }
    } else {
      throw 'Bank is not an instance of Bank class. Request canceled.'
    }
  }


  removeBank(bank) {
    if (bank instanceof Bank) {
      const bankToDisassociate = this.associatedBanks.find(bankToDisassociate => bankToDisassociate.bankCode === bank.bankCode)
      const index = this.associatedBanks.indexOf(bankToDisassociate)
      if (!bankToDisassociate) {
        console.log('Bank not found.');
      } else {
        this.associatedBanks.splice(bankToDisassociate, 1)
        console.log(`Bank ${bank.bankCode} successfully disassociated.`);
        Bank.createdBanks[index].qtyClients--
      }
    } else {
      console.log('Bank is not an instance of Bank class. Request canceled.')
    }
  }
}


module.exports = Client