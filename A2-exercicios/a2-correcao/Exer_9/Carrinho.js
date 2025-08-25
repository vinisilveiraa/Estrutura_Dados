class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  total() {
    return this.produtos.reduce((soma, p) => soma + p.preco, 0);
  }
}

module.exports = Carrinho;
