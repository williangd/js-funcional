const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const exibirConteudo = file => new Promise(resolve => {
  fs.readFile(file, (_, conteudo) => resolve(conteudo.toString()));
});

exibirConteudo(caminho).then(console.log);
