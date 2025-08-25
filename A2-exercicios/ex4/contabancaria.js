class ContaBancaria {
    constructor() {
        this.saldo = 0
    }
    depositar(valor) {
        this.saldo += valor
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor
        } else {
            console.log("Saldo insuficiente")
        }
    }
    verSaldo() {
        console.log(`Saldo atual: R$ ${this.saldo}`)
    }
}

module.exports = ContaBancaria