let quantidadeVitorias = prompt('Digite a quantidade de vitórias que o Herói teve: ')
let quantidadeDerrotas = prompt('Digite a quantidade de derrotas que o Herói teve: ')

function calculoDoSaldo(quantidadeVitorias = 0, quantidadeDerrotas = 0) {
  return quantidadeVitorias - quantidadeDerrotas
}

let valor = calculoDoSaldo(quantidadeVitorias, quantidadeDerrotas)
let rank;

switch (true) {
  case valor <= 10:
    rank = 'Ferro'
    break;
  case valor >= 11 && valor <= 20:
    rank = 'Bronze'
    break;
  case valor >= 21 && valor <= 50:
    rank = 'Prata'
    break;
  case valor >= 51 && valor <= 80:
    rank = 'Ouro'
    break;
  case valor >= 81 && valor <= 90:
    rank = 'Diamante'
    break;
  case valor >= 91 && valor <= 100:
    rank = 'Lendário'
    break;
  case valor >= 101:
    rank = 'Imortal'
    break
}

console.log(`O Herói tem um saldo de ${valor} vitória(s) e está no nível de ${rank}.`)
