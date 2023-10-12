// Operadores de comparação
console.log(5 <= 5); 
console.log(5 < 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 == 5);
console.log(5 != 5);
console.log(5 == '5');
console.log(5 === '5'); // é igual mas não é identico (===) a '5' 
console.log(5 != '5');  
console.log(5 !== '5');  

// Operadores lógicos
console.log(true && true);  //
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// let idade = 50;
// console.log(`A idade é: ${idade}`);

// let a = 10;
//     b = 50;
//     c = 70;

//     console.log(a, b, c);
//     console.log(`As idades são:\n${a} ${b} ${c}`);

// let age = prompt('Digite a sua idade');
// alert(`Você tem ${age} anos`);


// Desafio: escrever um programa que solicite ao usuário o nome, em seguida, o programa solicita o sobrenome. Após isso, o programa exibe no console a frase "O nome completo é: [Nome completo do usuário]"


// let nome = null;
//     sobrenome = null;
//     nomeCompleto = null;

//     nome = prompt('Insira seu primeiro nome! ');
//     sobrenome = prompt('Insira seu sobrenome!');

//     console.log(`O nome completo é: ${nome} ${sobrenome}`);

// let name1 = prompt('Nome: ');
// let name2 = prompt('Sobrenome: ');
// console.log('O Nome completo é: '+name1+" "+name2);

// console.log(`O nome completo é: ${name1} ${name2}`);


console.error('Error!!!'); // Insere uma mensagem de erro
console.warn('Aviso'); // Insere uma mensagem de aviso


// ESTRUTURAS CONDICIONAIS
// let numero1 = prompt('Digite um número: ');

// "if" == "se"
// if(numero1 >= 18){
//     console.log('Maior de idade!');
// }

// let username = prompt('Qual seu usuário?');

// if(username == 'Nicolas') {
//     console.log('Estou com o Nicolas em frente');
// }
// else{
//     console.log('Usuário não cadastrado!');
// }


//Desafio 2: Escrever um programa onde o usuário irá digitar no 'Prompt' a idade. Se o usuário for maior ou igual 18 -> pode entrar. Senao -> não pode entrar
// let idade = prompt('Informe sua idade:');

// if(idade >= 18){
//     console.log(`${idade} anos! Você é maior de idade. Pode entrar!`
//     );
// }
// else{
// console.log(`${idade} anos!!! Você é menor de idade. Não poderá entrar!`);
// }

//Desafio 3: Escreva um programa que, solicite ao usuário que digite um número qualquer, em seguida, o programa deverá solicitar que o usuário digite outro número. Após isso, o programa apresentará a soma dos dois números. ** Se essa soma for maior ou igual a 100 -> Apresentar na tela = "Parcelamos em até 10x sem juros". caso contrário "Pagamento a vista".

// let num1 = Number.parseFloat(prompt('Informe um número:'));
// let num2 = Number.parseFloat(prompt('Infome outro número:'));
// let somaTotal = num1 + num2;

// if(somaTotal > 100){
//     alert(`Valor= ${somaTotal} Podemos parcelar em até 10x **sem juros** `);
// }
// else{
//     alert(`Valor= ${somaTotal} Não é possível parcelar este valor. Apenas **pagamento à vista** `);
// }

//Desafio 4: Uma professora gostaria de um programa que calculasse a média de duas provas. 1º O programa deverá solicitar o nome do aluno. 2º Solicitar nota 1 e nota 2. 3º Apresentar o Resultado, Nome do Aluno, média final.

let nomeAluno = prompt('Insira o nome do aluno:');
let nota1 = Number.parseFloat(prompt('Insira a primeira nota do aluno:'));
let nota2 = Number.parseFloat(prompt('Insira a segunda nota do aluno:'));
const media = (nota1+nota2)/2

if(media > 5){
    alert(`O aluno ${nomeAluno}, foi APROVADO! Nota = ${media}`);
}
else{
    alert(`O aluno ${nomeAluno}, foi REPROVADO! Nota = ${media}`);
}
