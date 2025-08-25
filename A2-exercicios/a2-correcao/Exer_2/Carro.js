class Carro {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
    console.log(`${this.modelo} acelerou. Velocidade: ${this.velocidade} km/h`);
  }

  frear() {
    this.velocidade -= 5;
    console.log(`${this.modelo} freou. Velocidade: ${this.velocidade} km/h`);
  }
}

module.exports = Carro;
