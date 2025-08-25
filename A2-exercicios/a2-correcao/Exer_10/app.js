const Livro = require('./Livro');
const Biblioteca = require('./Biblioteca');

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro(new Livro("Dom Casmurro", "Machado de Assis", 1899));
biblioteca.adicionarLivro(new Livro("O Cortiço", "Aluísio Azevedo", 1890));
biblioteca.adicionarLivro(new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881));

console.log("Todos os livros:");
biblioteca.listarLivros();

console.log("\nLivros de Machado de Assis:");
console.log(biblioteca.buscarPorAutor("Machado de Assis"));
