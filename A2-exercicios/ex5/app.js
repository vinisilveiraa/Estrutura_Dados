const moto = require('./veiculos').moto;
const carro = require('./veiculos').carro;

const meuCarro = new carro("Fusca", 1980);
meuCarro.buzinar();
const minhaMoto = new moto("Harley", 2020);
minhaMoto.buzinar();