class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Oi, meu nome e ${this.nome} e tenho ${this.idade} anos.`
        )
    }
};

module.exports = Pessoa;