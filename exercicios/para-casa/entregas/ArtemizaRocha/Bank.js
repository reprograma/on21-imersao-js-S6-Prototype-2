class Bank{

code;
name;
#transferRate;
qtyClients = 0;

constructor(code, name, transferRate){
     this.code = code;
     this.name = name;
     this.#transferRate = transferRate;
     
     this.constructor.createBanks.push({ code: code, qtyClients: 0 });

}

static createBanks = []

get(){

return this.#transferRate;
}


}


 
module.exports = Bank;
