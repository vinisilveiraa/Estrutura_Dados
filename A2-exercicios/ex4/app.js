const ContaBancaria = require('./contabancaria');

const minhaConta = new ContaBancaria();
minhaConta.verSaldo(); 
minhaConta.depositar(1000); 
minhaConta.verSaldo(); 
minhaConta.sacar(500); 
minhaConta.verSaldo(); 
minhaConta.depositar(1000); 
minhaConta.verSaldo(); 