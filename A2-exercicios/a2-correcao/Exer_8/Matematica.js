class Matematica {
  static somar(a, b) {
    return a + b;
  }

  static subtrair(a, b) {
    return a - b;
  }

  static fatorial(n) {
    if (n === 0) return 1;
    return n * Matematica.fatorial(n - 1);
  }
}

module.exports = Matematica;
