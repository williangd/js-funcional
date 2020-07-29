/* eslint-disable func-names, no-console */

function somar(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

function calcular(num1) {
  return function (num2) {
    return function (fn) {
      return fn(num1, num2);
    };
  };
}

const res1 = somar(1)(2)(3);
console.log(res1);

function subtrair(a, b) {
  return a - b;
}

const res2 = calcular(4)(2)(subtrair);
console.log(res2);
