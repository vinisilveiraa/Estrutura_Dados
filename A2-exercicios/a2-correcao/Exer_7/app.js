const Gerente = require('./Gerente');
const Desenvolvedor = require('./Desenvolvedor');

const g = new Gerente("Ana", 5000);
const d = new Desenvolvedor("Pedro", 4000);

console.log(`Bônus do gerente: R$ ${g.calcularBonus()}`);
console.log(`Bônus do dev: R$ ${d.calcularBonus()}`);
