const path = require('path');
const fn = require('./funcoes');

const dir = path.join(__dirname, '..', 'dados', 'legendas');

const simbolos = [
  '.', '?', '-', '"', ',', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')',
];

fn.lerDiretorio(dir)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarPor('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarPor(' '))
  .then(fn.removerElementosSeVazio)
  .then(console.log);
