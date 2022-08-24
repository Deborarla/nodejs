/*Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa 
que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. 
Utilize, no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota 
mínima que ele deve tirar na próxima prova para poder passar com nota sete.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse 
projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.*/

const input = require('readline-sync')

console.log("**************************************")

let notaA = Number(input.question('Digite a primeira nota do aluno '))
let notaB = Number(input.question('Digite a segunda nota do aluno '))
let notaC = Number(input.question('Digite a terceira nota do aluno '))

let resultado = (notaA += notaB += notaC)/3
let classificacao = resultado <= 7 ? 'Aluno reprovado': 'Aluno aprovado' 

console.log(classificacao, 'com média', resultado)

console.log("**************************************")