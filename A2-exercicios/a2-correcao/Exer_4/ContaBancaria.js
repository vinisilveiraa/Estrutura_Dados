class ContaBancaria {
  constructor() {
    this._saldo = 0;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  verSaldo() {
    console.log(`Saldo atual: R$ ${this._saldo}`);
  }
}

module.exports = ContaBancaria;
