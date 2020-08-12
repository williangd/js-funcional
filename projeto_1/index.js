const fn = require('./funcoes');
const path = require('path');

const dir = path.join(__dirname, '..', 'dados', 'legendas');

fn.lerDiretorio(dir)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivos)
  .then((conteudos) => conteudos.join('\n'))
  .then((todoConteudo) => todoConteudo.split('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(console.log);
