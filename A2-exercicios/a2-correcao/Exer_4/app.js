const ContaBancaria = require('./ContaBancaria');

const conta = new ContaBancaria();
conta.depositar(100);
conta.verSaldo();
conta.sacar(30);
conta.verSaldo();
