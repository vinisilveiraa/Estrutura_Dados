const animal = require('./animal');

class cachorro extends animal {
    falar() {
        console.log('O cachorro está latindo');
    }   

}

module.exports = cachorro;