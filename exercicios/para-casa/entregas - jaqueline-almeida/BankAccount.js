class BankAccount {
    codeBank;
    codeClient;
    accountNumber;
    agencyNumber;
    #amount = 0;
    #qtyMoneyBank = 0;
    #taxPayBank;

    constructor(client, bank, accountNumber, agencyNumber, amount) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#amount = amount;
        ;
    }

    credit(amount) {
        this.#amount += amount;
        console.log(`Saldo atualizado da conta R$(this.#amount)`)
    }
}