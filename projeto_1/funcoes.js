const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    const arquivos = fs.readdirSync(caminho).map((arquivo) => path.join(caminho, arquivo));
    resolve(arquivos);
  });
}

function elementosTerminadosCom(array, padrao) {
  return array.filter((item) => item.endsWith(padrao));
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function removerSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerSeIncluir(array, padrao) {
  return array.filter((el) => !el.includes(padrao));
}

function removerSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivos,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
};
