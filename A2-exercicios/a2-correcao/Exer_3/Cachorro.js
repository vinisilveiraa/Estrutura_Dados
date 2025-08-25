const Animal = require('./Animal');

class Cachorro extends Animal {
  falar() {
    console.log("Au au!");
  }
}

module.exports = Cachorro;
