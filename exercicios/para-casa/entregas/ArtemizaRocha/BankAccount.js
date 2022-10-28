const Bank = require('./Bank');
const Client = require('./Client');


class BankAccount {
client;
bank;
accountNumber;
agencyNumber;
anAmount = 0;
amountMoneyWithdrawn24hour = 0 ;
FeeToBeChargedOnEach24HourWithdrawal = 0;

constructor(client, bank, accountNumber, agencyNumber){
this.client = client;
this.bank = bank;
this.accountNumber = accountNumber;
this.agencyNumber = agencyNumber;


}





}

module.exports = BankAccount;