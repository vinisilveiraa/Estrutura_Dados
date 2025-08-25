class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    this.livros.forEach(l => console.log(`${l.titulo} - ${l.autor} (${l.ano})`));
  }

  buscarPorAutor(autor) {
    return this.livros.filter(l => l.autor === autor);
  }
}

module.exports = Biblioteca;
