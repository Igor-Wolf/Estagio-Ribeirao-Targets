/*

2) Escreva um programa que verifique, em uma string, a existência da 
letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade 
de vezes em que ela ocorre. 

IMPORTANTE: Essa string pode ser informada através de qualquer entrada 
de sua preferência ou pode ser previamente definida no código; 

*/


let palavra = "paralelepipedo"
let contador = 0


for (let letra of palavra) {
    
    if (letra === "a" || letra === "A"){
        contador ++
    }
}

console.log(`A letra 'a' ou 'A' aparecem ${contador} vezes`)