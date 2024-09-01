/*

1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3,
 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
 informado um número, ele calcule a sequência de Fibonacci e retorne uma 
 mensagem avisando se o número informado pertence ou não a sequência. 

IMPORTANTE: Esse número pode ser informado através de qualquer entrada 
de sua preferência ou pode ser previamente definido no código;

*/

let firstNumber = 0;
let secondNumber = 1;
let result = 0;
let listFibo = [];

// valor definido
let userNumber = 56;

listFibo.push(secondNumber);

for (let i = 0; i < userNumber; i++) {
    result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
    if (userNumber <= 0) {
        break;
    } else if (result <= userNumber) {
        listFibo.push(result);
    } else {
        break;
    }
}

// for (let i of listFibo) {
//     console.log(i);
// }

if (userNumber <= 0) {
    console.log(`${userNumber} não pertence à sequência Fibonacci`);
} else if (listFibo.includes(userNumber)) {
    console.log(`${userNumber} pertence à sequência Fibonacci`);
} else {
    console.log(`${userNumber} não pertence à sequência Fibonacci`);
}
