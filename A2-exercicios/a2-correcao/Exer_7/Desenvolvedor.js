const Funcionario = require('./Funcionario');

class Desenvolvedor extends Funcionario {
  calcularBonus() {
    return this.salario * 0.15;
  }
}

module.exports = Desenvolvedor;
