const Endereco = require('./Endereco');
const Cliente = require('./Cliente');

const end = new Endereco("Rua A", "São Paulo");
const cliente = new Cliente("João", end);

cliente.mostrarDados();
