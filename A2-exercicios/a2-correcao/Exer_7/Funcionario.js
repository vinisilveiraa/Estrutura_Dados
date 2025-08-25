class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }
}

module.exports = Funcionario;
