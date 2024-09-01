/**
 
 5) Você está em uma sala com três interruptores, cada um conectado a 
 uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala 
 em que está, mas pode ligar e desligar os interruptores quantas vezes 
 quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
  Como você faria para descobrir, usando apenas duas idas até uma das 
  salas das lâmpadas, qual interruptor controla cada lâmpada?   


NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O 
CÓDIGO FONTE QUE VOCÊ DESENVOLVEU.
 */




/**
 RESOLUÇÃO:

 3 salas = 1, 2, 3
 3 interruptores = A, B, C


 ----------------------- Primeira tentativa

 Apertando o interruptor B, esperando, desligando o interruptor B e, em 
 seguida,  apertando o interruptor A e verificando a sala 1.

 Eu teria 3 possibilidades:

 1º Sala 1: Luz acesa, levando à constatação de que o interruptor A é 
 referente à sala 1.

 2º Sala 1: Luz apagada e quente ao toque, levando à constatação de que o
 interruptor A não é referente à sala 1, sendo certamente da sala 2 ou 3, 
 e que o interruptor B acendeu a sala 1.

 3º Sala 1: Luz apagada e fria ao toque, levando à constatação de que o
 interruptor A não é referente à sala 1, sendo certamente da sala 2 ou 3, 
 e que  o interruptor B não acende a sala 1.



 ----------------------- Segunda tentativa

 ======== Considerando a possibilidade 1 da primeira tentativa:

 Apertando o interruptor B e verificando a sala 2.

 1º Sala 2: Luz acesa, levando à constatação de que o interruptor B é 
 referente  à sala 2 e, por consequência, o interruptor C é referente à 
 sala 3, solucionando  o problema.

 2º Sala 2: Luz apagada, levando à constatação de que o interruptor B é 
 referente  à sala 3 e, por consequência, o interruptor C é referente à 
 sala 2, solucionando  o problema.


 

 ======== Considerando a possibilidade 2 da primeira tentativa:

 Apertando o interruptor C e verificando a sala 2. Já sei que o B é da 
 sala 1...

 1º Sala 2: Luz acesa, levando à constatação de que o interruptor C acende 
 a sala 2  e o interruptor A acende a sala 3 solucionando o problema.

 2º Sala 2: Luz apagada, significa que o interruptor C acende a sala 3 e 
 que o  interruptor A acende a sala 2 solucionando o problema.



 ======= Considerando a possibilidade 3 da primeira tentativa:

 Apertando o interruptor B e verificando a sala 2. Já sei que o B não 
 acende a sala 1...

 1º Sala 2: Luz acesa, levando à constatação de que o interruptor B acende
  a sala 2, o interruptor A é da sala 3 e, por consequência, o interruptor 
  C é da sala 1 solucionando o problema.

 2º Sala 2: Luz apagada, constatando que o B acende a sala 3, o
  interruptor A acende a sala 2 e, por consequência, o interruptor C 
  acende a sala 1 solucionando o problema.
 */
