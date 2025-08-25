const Produto = require('./Produto');
const Carrinho = require('./Carrinho');

const carrinho = new Carrinho();

carrinho.adicionarProduto(new Produto("Arroz", 20));
carrinho.adicionarProduto(new Produto("Feijão", 10));
carrinho.adicionarProduto(new Produto("Carne", 50));

console.log("Total da compra: R$", carrinho.total());
