const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    const arquivos = fs.readdirSync(caminho).map(arquivo => path.join(caminho, arquivo));
    resolve(arquivos);
  });
}

function elementosTerminadosCom(padrao) {
  return function (array) {
    return array.filter(item => item.endsWith(padrao));
  };
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
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function removerElementosSeVazio(array) {
  return array.filter(el => el.trim());
}

function removerElementosSeIncluir(padrao) {
  return function (array) {
    return array.filter(el => !el.includes(padrao));
  };
}

function removerElementosSeApenasNumero(array) {
  return array.filter(el => {
    const num = parseInt(el.trim(), 10);
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map(el => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join('')
      }, el)
    });
  };
}

function mesclarElementos(conteudos) {
  return conteudos.join(' ');
}

function separarPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(elementos) {
  return Object.values(elementos.reduce((acc, elemento) => {
    const p = elemento.toLowerCase();
    const qtde = acc[p] ? acc[p].qtde + 1 : 1;

    acc[p] = { elemento: p, qtde }
    return acc
  }, {}))
}

function ordernarPorAtributoNumerico(attr, ordem = 'asc') {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === 'asc' ? asc : desc)
  }
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarPor,
  agruparElementos,
  ordernarPorAtributoNumerico
};
