const Funcionario = require('./Funcionario');

class Gerente extends Funcionario {
  calcularBonus() {
    return this.salario * 0.2;
  }
}

module.exports = Gerente;
