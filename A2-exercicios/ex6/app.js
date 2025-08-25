const endereco = require('./endereco');
const cliente = require('./cliente');

const endereco1 = new endereco("Rua A", "Cidade X");
const cliente1 = new cliente("João", endereco1);

cliente1.mostrarDados();