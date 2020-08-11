const fn = require('./funcoes');
const path = require('path');

const dir = path.join(__dirname, '..', 'dados', 'legendas');

fn.lerDiretorio(dir)
  .then((files) => fn.elementosTerminadosCom(files, '.srt'))
  .then((arquivosSTR) => fn.lerArquivos(arquivosSTR))
  .then((conteudos) => conteudos.join('\n'))
  .then((todoConteudo) => todoConteudo.split('\n'))
  .then((linhas) => fn.removerSeVazio(linhas))
  .then((linhasComConteudo) => fn.removerSeIncluir(linhasComConteudo, '-->'))
  .then((linhasSemTempo) => fn.removerSeApenasNumero(linhasSemTempo))
  .then(console.log);
