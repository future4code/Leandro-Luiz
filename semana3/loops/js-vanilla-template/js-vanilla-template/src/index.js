//**Exercícios de interpretação de código**
//
//EXERCÍCIO 1
//
//O que o código abaixo está fazendo? Qual o resultado impresso no console? 

// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)
//
//R: A variável contadora i percorre o for até a posição 15, apartir do 0 e a variável sum recebe o somatório
//   do número de cada contador. 
//Resultado: 105

//EXERCÍCIO 2
//
//Leia o código abaixo:
//
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

//a. O que o comando `.push` faz?
// R: Todo item da lista que for divisivel por 5 e o resto for 0, o push coloca no array novaLista
//
//b. Qual o valor impresso no console?
//R:(4) [10, 15, 25, 30]
//
//c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? 
//   E se tivesse o valor de `4`?
//R: com número 3 seria:
//   (6) [12, 15, 18, 21, 27, 30]
//   com número 4 seria:
//   [12]

//DESAFIO 1
//
//Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 
//
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//R: 4
//   0
//   00
//   000
//   0000

//**Exercícios de escrita de código**

//EXERCÍCIO 3
//
//Nas perguntas abaixo, considere que você tenha acesso a um `array`  
// (chamado de 'array original') que seja composto somente de números. 
//Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.
//
//a. Escreva um programa que devolva o maior e o menor números contidos no array original
//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let maior = array[0];
// let menor = array[0];

// for(let i=0; i < array.length; i++){
//     let numero = array[i];
//     if(numero > maior ){
//         maior = numero;
//     }
//     if(numero < menor){
//         menor = numero;
//     }
// } 
//
// console.log("O maior número é " + maior + " e o menor é " + menor);
//
//
//b. Escreva um programa que devolva um novo array contendo todos os valores do array 
//   original divididos por 10.
//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let valor = [];    
// 
// for(let i=0; i < array.length; i++){
//     valor[i] = array[i] / 10; 
//     valor.push(array);       
// } 
//
// console.log(valor);
//
//
//c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let valor = [];    
// let numero = 0;

// for(let i=0; i < array.length; i++){

//  if (array[i] % 2 === 0){   
//     numero = array[i]; 
//     valor.push(numero);       
//  }   
// } 

// console.log(valor);
//
//
//d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: 
//   "O elemento do índex i é: numero"
//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let valor = [];    
// let numero = 0;
//
// for(let i=0; i < array.length; i++){
//     numero = array[i]; 
//     valor.push(numero);   
//     console.log("O elemento do índex " + i + " é: " + valor[i]);    
// } 
//
//
//Exemplos do que o código tem que fazer em cada item:

// Este array será usado para exemplificar as respostas de todos os itens
    // const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
// Resposta a.
    // "O maior número é 130 e o menor é 21"
    
// Resposta item b.
    // [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]
    
// Resposta item c.
    // [80, 30, 130, 40, 60, 70, 120, 90, 110] 
    
// Resposta item d.
    // [ 'O elemento do índex 0 é 80',
    //   'O elemento do índex 1 é 30',
    //   'O elemento do índex 2 é 130',
    //   'O elemento do índex 3 é 40',
    //   'O elemento do índex 4 é 60',
    //   'O elemento do índex 5 é 21',
    //   'O elemento do índex 6 é 70',
    //   'O elemento do índex 7 é 120',
    //   'O elemento do índex 8 é 90',
    //   'O elemento do índex 9 é 103',
    //   'O elemento do índex 10 é 110',
    //   'O elemento do índex 11 é 55' ]

    
//Desafio 2
//
//Neste exercício vocês vão implementar uma brincadeira muito simples: 
//"Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
//Inicialmente, uma das pessoas insere qual o número em que ela pensou. 
//A outra pessoa tem que ficar chutando até acertar em cheio o número. 
//Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, 
// indicando se o número que ela pensou é maior ou menor do que o chute em si. 
//Veja, abaixo, um exemplo de partida:
//
// Vamos jogar!
// O número chutado foi: 3
// Errrrrrrrou, é maior
// O número chutado foi: 18
// Errrrrrrrou, é menor
// O número chutado foi: 15
// Errrrrrrrou, é menor
// O número chutado foi: 11
// Acertou!!
// O número de tentativas foi: 4


// Um resumo das funcionalidades são:

//- Solicitar que o primeiro jogador escolha um número, através do `prompt`. 
//  Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
//- A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, 
//  através do `prompt`. A cada chute, deve ser informado no console:
//- O número chutado, com a mensagem: `O número chutado foi: <número>`
//- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
//- Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, 
//  deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : 
//  <quantos chutes o usuário deu>`

//
//
// const numeroJogador = prompt("Jogador 1, digite seu número ");
// console.log("Vamos Jogar!!!");
// let respostaJogador = prompt("Jogador 2, digite o número que você acha que o Jogador 1 digitou");
// let contador = 0;

// while(numeroJogador !== respostaJogador){
//     contador++;
//     console.log("O número chutado foi: " + respostaJogador);
//     if(numeroJogador < respostaJogador){
//        console.log("Errado. O número chutado por você, foi maior do que o número indicado pelo Jogador 1");   
//     }
//     if(numeroJogador > respostaJogador){
//         console.log("Errado. O número chutado por você, foi menor do que o número indicado pelo Jogador 1");   
//      }
//     respostaJogador = prompt("Jogador 2, digite o número que você acha que o Jogador 1 digitou");
// }

// console.log("Acertou!!!");
// console.log("O número de tentativas foi de: " + contador);


//Desafio 3
//Uma das principais características de uma boa pessoa programadora é conseguir resolver seus 
//problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! 
//Então, vamos pedir para que você faça uma alteração no código acima. 
//Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. 
//A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) 
// e o usuário terá que ficar chutando o valor até acertar. 
//Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
//
//Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração?
//O que você poderia ter feito para que fosse mais fácil? 
//**Deixe comentários no seu código sobre esta reflexão.**



// console.log("Vamos Jogar!!!");  
// function myFunction() {
//     return Math.floor((Math.random() * 100) + 1);
//   }
// let numeroAleatorio = myFunction(); 
// let respostaJogador = prompt("Jogador, digite o número que você acha que seria");
// let contador = 0;

// while(numeroAleatorio !== respostaJogador){
//     contador++;
//     console.log("O número chutado foi: " + respostaJogador);
//     if(numeroAleatorio < respostaJogador){
//        console.log("Errado. O número chutado por você, foi maior");   
//     }
//     if(numeroAleatorio > respostaJogador){
//         console.log("Errado. O número chutado por você, foi menor");   
//      }
//     respostaJogador = prompt("Jogador, digite o número que você acha que seria");
// }

// console.log("Acertou!!!");
// console.log("O número de tentativas foi de: " + contador);
