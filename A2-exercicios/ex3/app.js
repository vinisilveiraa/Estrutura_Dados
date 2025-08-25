const gato = require('./gato');
const animal = require('./animal');
const cachorro = require('./cachorro');

const meuCachorro = new cachorro();
const meuGato = new gato();
const meuAnimal = new animal();

meuCachorro.falar();
meuGato.falar();
meuAnimal.falar();