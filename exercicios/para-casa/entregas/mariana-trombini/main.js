const Bank = require("./bank")
const Client = require('./client')
const BankAccount = require('./bankAccount')


const client1 = new Client('Mariana', '123.456.789-00')
const bank = new Bank(107, 'ReproBank', 1.1)
client1.addBank(bank)
const bankAccount = new BankAccount(client1, bank, 123456, 001)

bankAccount.credit(1500)
bankAccount.debit(15)

const client2 = new Client('Marcela', '789.321.456-11')
const bank2 = new Bank(108, 'BankReprograma', 1.5)
client1.addBank(bank2)
client2.addBank(bank)
client2.addBank(bank2)


const bankAccount2 = new BankAccount(client2, bank2, 645789, 002)
bankAccount2.credit(750)
bankAccount2.debit(50)


const bank3 = new Bank(109, 'BankDaRepro', 1.8)
const bank4 = new Bank(110, 'Any_Bank', 1.2)

client1.addBank(bank3)
client1.addBank(bank3)
client2.addBank(bank3)
client2.addBank(bank4)

client2.removeBank(bank3)

const client3 = new Client('Mônica', '111.222.333-22')

client3.addBank(bank4)
client3.addBank(bank3)
client3.addBank(bank)
client3.associatedBanks

client3.removeBank(bank4)
client3.removeBank(bank4)
client2.removeBank(bank2)
client2.removeBank(bank2)
client2.removeBank(bank2)
client2.removeBank(bank2)

client1.associatedBanks
client2.associatedBanks
Bank.createdBanks

bankAccount.transferTo(bankAccount2, 150)
bankAccount.transferTo(bankAccount2, 150000)


bankAccount.cashWithdrawal(10)
bankAccount.cashWithdrawal(10)
bankAccount.cashWithdrawal(10)

bankAccount.cashWithdrawal(10)

bankAccount.closeAccount()
bankAccount.debit(1272)
bankAccount.closeAccount()

