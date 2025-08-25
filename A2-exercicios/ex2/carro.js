class Carro {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }
    acelerar() {
        this.velocidade += 10;
        console.log(`A velocidade atual foi aumentada em 10, agora em ${this.velocidade} km/h`);
    };
    frear() {
        this.velocidade -= 5;
        console.log(`A velocidade atual foi diminuida em 5, agora em ${this.velocidade} km/h`);
    };
}

module.exports = Carro;