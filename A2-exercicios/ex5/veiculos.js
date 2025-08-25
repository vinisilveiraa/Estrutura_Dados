class carro {
    constructor(modelo, ano) {
        this.modelo = modelo
        this.ano = ano
    }
    buzinar() {
        console.log("Buzinando o Carro!")
    }
}
class moto {
    constructor(modelo, ano) {
        this.modelo = modelo
        this.ano = ano
    }
    buzinar() {
        console.log("Buzinando a Moto!")
    }
}

module.exports = { carro, moto }