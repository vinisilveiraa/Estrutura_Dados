const animal = require('./animal');

class gato extends animal {
    falar() {
        console.log('O gato está miando');
    }   

}

module.exports = gato;