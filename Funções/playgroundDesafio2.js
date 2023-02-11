function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    }`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 45
}

const pessoa2 = {
    nome: "Joao",
    idade: 21
}

const animal = {
    nome: "Maya",
    idade: 1
}

console.log(calculaIdade.call(pessoa1, 23));

console.log(calculaIdade.apply(pessoa2, [23]));