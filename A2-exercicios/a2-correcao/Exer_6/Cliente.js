class Cliente {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  mostrarDados() {
    console.log(`${this.nome} mora na rua ${this.endereco.rua}, ${this.endereco.cidade}.`);
  }
}

module.exports = Cliente;
