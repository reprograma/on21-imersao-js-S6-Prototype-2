const Bank = require('./bank')
const Person = require('./person')

class Client extends Person {
  associatedBanks = []

  constructor(name, cpf) {
    super(name, cpf)
  }


  addBank(bank, client) {
    if (bank instanceof Bank) {
      const bankToAssociate = client.associatedBanks.find(bankToAssociate => bankToAssociate.bankCode === bank.bankCode)
      if (!bankToAssociate) {
        client.associatedBanks.push({ bankCode: bank.bankCode, bankName: bank.bankName })

        const index = Bank.createdBanks.findIndex(createdBank => createdBank.bankCode === bank.bankCode);
        Bank.createdBanks[index].qtyClients++;
        console.log(`Bank ${bank.bankCode} added to client: ${client.name}`)
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