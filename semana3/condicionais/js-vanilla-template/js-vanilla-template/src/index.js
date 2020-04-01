// **Exercícios de interpretação de código**

// EXERCÍCIO 1
//
// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
//
//Qual o teste que ele realiza? 
//R: O trecho de código requisita ao usuário que digite um número que será armazanado em uma variével, 
//   variável essa que será, que é recebida por outra variável(número) que fará a seguinte validação.
//   Após dividir o valor por 2 e verificar o resto da operação seja igual a zero, sendo número par, 
//   e não tendo resto, é true a comparação e retorna a frase "Passou no Teste". 
//   Já se a divisão, no caso números impares, sobrerem a divisão por 2, a condição será falsa e será
//   exibido na tela a frase "Não passou no teste".
//
//Para que tipos de números ele imprime no console "Passou no teste"? 
//R: Imprime a frase para números pares.
//
//Para que tipos, a mensagem é "Não passou no teste"?
//R: Imprime a frase para números ímpares.

//EXERCÍCIO 2
//
//O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercado. 
//Veja abaixo:
//
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//
//
//a. Para que serve o código acima?
//R: Vai mostrar na tela para o usuário a frase "Escolha uma fruta", o qual no campo abaixo ele vai digitar
//   o nome da fruta, que será armazenada na variável fruta, apartir disso essa variável com o nome da fruta 
//   vai entrar no escopo do código switch, onde apartir do nome da fruta digitada, na variável preco será
//   armazenada o valor da fruta correspondente. 
//   Após isso é lançado na tela a frase "O preço da fruta  Laranja  é  R$  3.5", com as informações da variável 
//   fruta e preco.
//   Se por acaso for escolhido uma fruta diferente das registradas no código, 
//   é exibido a frase "O preço da fruta  abacaxi  é  R$  5", onde é mostrado o que foi digitado e armazenado na
//   variável fruta e um valor default de 5.
//
//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//R: O preço da fruta  Maçã  é  R$  2.25  
//
//c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. 
//   Qual seria o preço que você pagaria?
//R: R$24.55
//
//d. Considere que um usuário queira comprar uma `Pêra`, 
//   qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` 
//   (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
//R: O preço da fruta  Pêra  é  R$  5.5


//EXERCÍCIO 3
//
//Leia o código abaixo:

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)

//Considere um usuário que digita os números 3 e 4 respectivamente. 
//Qual será a mensagem do terminal? Haverá algum erro? 
//R: Sim haverá erro com a seguinte mensagem "index.js:96 Uncaught ReferenceError: mensagem is not defined
//   at index.js:96"
//
//Justifique usando os conceitos de bloco ou escopo.
//R: A linha console.log(mensagem), está fora do bloco de execução do if principal, portanto não sendo 
//   possível retornar a mensagem referente a execução do trecho de código.


//**Exercícios de escrita de código**
//
//EXERCÍCIO 4
//
//Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:
//
//a. Crie um programa que receba dois números do usuário através do `prompt` 
//   e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? 
//  (é só testar e colocar um comentário descrevendo o que aconteceu)
//
// let numero1 = Number(prompt("Digite o primeiro número"));
// let numero2 = Number(prompt("Digite o segundo número"));
// if (numero1 > numero2) {
//     console.log("O número2 que é: " + numero2 + " é menor que o número1 que é: " + numero1);
//     } else if (numero2 > numero1) {
//         console.log("O número1 que é: " + numero1 + " é menor que o número2 que é: " + numero2);
//     } else {
//         console.log("Os números 1 e 2 são iguais e são: " + numero1);
// }

//O que acontece com o seu programa se os 2 números forem iguais?
//R: Sendo os números iguais, o trecho do código seguirá para 
//   mostrar na tela que "Os números 1 e 2 são iguais e são: 2", no caso como os dois números sendo 2,
//   onde retorno com a variável numero1 que contêm 2.
//
//
// let numero1 = Number(prompt("Digite o primeiro número"));
// let numero2 = Number(prompt("Digite o segundo número"));
// console.log("Antes de digitar o ultimo número verifique se é diferente dos anteriores");
// let numero3 = Number(prompt("Digite o terceiro número"));
// if (numero1 === numero2 === numero3){
//      numero3 = Number(prompt("Digite novamente outro número pois esse ultimo é igual aos outros"))
//     } else if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) {

//     console.log("O número1 que é: " + numero1 + " é maior que o número2 que é: " + numero2 + " que é maior que o número3 que é: " + numero3);

//     } else if (numero1 > numero2 && numero1 > numero3 && numero2 < numero3) {

//     console.log("O número1 que é: " + numero1 + " é maior que o número3 que é: " + numero3 + " que é maior que o número2 que é: " + numero2);

//     } else if (numero1 < numero2 && numero1 < numero3 && numero2 < numero3) {

//     console.log("O número3 que é: " + numero3 + " é maior que o número2 que é: " + numero2 + " que é maior que o número1 que é: " + numero1);

//     } else if (numero1 > numero2 && numero1 < numero3 && numero2 < numero3) {

//     console.log("O número3 que é: " + numero3 + " é maior que o número1 que é: " + numero1 + " que é maior que o número2 que é: " + numero2);

//     } else if (numero1 < numero2 && numero1 < numero3 && numero2 > numero3) {

//     console.log("O número2 que é: " + numero2 + " é maior que o número3 que é: " + numero3 + " que é maior que o número1 que é: " + numero1);

//     } else if (numero1 < numero2 && numero1 > numero3 && numero2 > numero3) {

//     console.log("O número2 que é: " + numero2 + " é maior que o número1 que é: " + numero1 + " que é maior que o número3 que é: " + numero3);

//     } else {
//     console.log("Os números 1, 2 e 3 são iguais e são: " + numero1);
//     }

//b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. 
//   O que acontece como seu programa se os 3 números forem iguais? 
//   (é só testar e colocar um comentário descrevendo o que aconteceu)
//R: Se os 3 números forem iguais, ao fazer a comparação entre eles, será exibido na tela a seguinte frase
//   "Os números 1, 2 e 3 são iguais e são: 2"
//
//c. Agora, impeça que o usuário digite 3 números iguais. 
//   Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, 
//   inserir um número diferente.
//R: console.log("Antes de digitar o ultimo número verifique se é diferente dos anteriores");

//EXERCÍCIO 5
//

//Vamos criar um programa que classifique os animais dados alguns critérios. 
//O primeiro critério de divisão é se eles possuem ossos formando seu esqueleto ou não. 
//Caso possuam, são **vertebrados**, caso contrário, **invertebrados**. 
//O nosso foco é realizar a classificação só do primeiro caso. 
//Se possuir pelos, entende-se que ele é um mamífero; 
//e este pode ser classificado como um **ser humano** ou não (**mamífero não humano**), simplesmente, 
//pelo fato dele ser considerado racional ou não. Se não for mamífero, entende-se que ele é uma **ave**, 
//se possuir penas. Se não possuir, devemos entender uma característica importante: 
//se ele é um animal terrestre. Se não for, diz-se que é um **peixe**; se  for, 
//ele pode ser um **anfíbio** ou um **réptil**. Ele será o primeiro (anfíbio), 
//se passar uma parte da vida em ambiente aquático; e será o segundo (réptil), caso contrário.
//
//- OBS
//
//a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. 
//(Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. Coloque este link num comentário durante a resolução deste exercício)
// /diagramaEsquematico.jpeg (Está dentro da pasta do projeto)
//
//b. Escreva um programa que realize estas perguntas e indique a classificação final considerada. 
//As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado
// 
// let serVivo = prompt("O ser vivo a ser avaliado possui ossos ou não [s/n] ");
// let pelos;
// let racional;
// let pena;
// let terrestre;
// let anfibio;

// switch(serVivo){
//     case "n":
//         console.log("Ser Vivo Invertebrado");
//     break;    

//     case "s":
//     console.log("Ser Vivo Vertebrado");
//     pelos = prompt("Possui Pelos? [s/n]");
//     break;
//               }

//     switch(pelos){
//         case "s":
//         console.log("Ser Vivo Mamífero");
//         racional = prompt(" É um ser vivo racional? [s/n]");
//         break;

//         case "n":
//         pena = prompt(" Possui pena? [s/n]");
//         break;
//         }   

//         switch(racional){
//             case "s":
//             console.log("Ser Humano");
//             break;

//             case "n":
//            console.log("Mamífero Não Humano");    
//         }

//         switch(pena){
//             case "s":
//             console.log("Ave");
//             break;

//             case "n":
//             terrestre = prompt(" É um animal terrestre? [s/n]");
//             break;
//         }

//         switch (terrestre){
//             case "s":
//             anfibio = prompt(" É um animal anfibio? [s/n]");
//             break;

//             case "n":
//             console.log("Peixe");
//             break;
//         }

//         switch (anfibio){
//             case "s":
//             console.log("Passa parte da vida na água (Aquático)");
//             break;

//             case "n":
//             console.log("Réptil");
//             break;
//         }



// //Desafio 1
// let nomeCompleto = prompt("Digite seu Nome Completo");
// let tipoDoJogo = prompt("Qual Tipo de jogo deseja assistir: IN indica internacional; e DO indica doméstico; [escolha IN/DO]").toLowerCase();
// let etapaDoJogo = prompt("Qual Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final [escolha SF/DT/FI]").toLowerCase();
// let categoria = Number(prompt("Qual Categoria: pode ser as opções 1, 2, 3 ou 4; [escolha 1/2/3/4] "));
// let quantidadeIngresso = Number(prompt("Quantidade de ingressos"));
// let sf1 = 1320;
// let sf2 = 880;
// let sf3 = 550;
// let sf4 = 220;
// let dt1 = 660;
// let dt2 = 440;
// let dt3 = 330;
// let dt4 = 170;
// let fi1 = 1980;
// let fi2 = 1320;
// let fi3 = 880;
// let fi4 = 330;





// //Nacional

// if (tipoDoJogo == "do" && etapaDoJogo == "sf" && categoria == 1){
//     valorTotal = Number(sf1 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + sf1 + "\n Valor Total: " + valorTotal);

//     }else if (tipoDoJogo == "do" && etapaDoJogo == "sf" && categoria == 2) {
//     valorTotal = Number(sf2 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + sf2 + "\n Valor Total: " + valorTotal);

//     }else if (tipoDoJogo == "do" && etapaDoJogo == "sf" && categoria == 3) {
//     valorTotal = Number(sf3 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + sf3 + "\n Valor Total: " + valorTotal);
//      }else { 
//     valorTotal = Number(sf4 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + sf4 + "\n Valor Total: " + valorTotal);
//      }
  
// //DT     
// if (tipoDoJogo == "do" && etapaDoJogo == "dt" && categoria == 1) {
//     valorTotal = Number(dt1 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + dt1 + "\n Valor Total: " + valorTotal);

// }else if (tipoDoJogo == "do" && etapaDoJogo == "dt" && categoria == 2) {
//     valorTotal = Number(dt2 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + dt2 + "\n Valor Total: " + valorTotal);

// }else if (tipoDoJogo == "do" && etapaDoJogo == "dt" && categoria == 3) {
//     valorTotal = Number(dt3 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + dt3 + "\n Valor Total: " + valorTotal);
// }else {
//     valorTotal = Number(dt4 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + dt4 + "\n Valor Total: " + valorTotal);
// }

// //FI

// if (tipoDoJogo == "do" && etapaDoJogo == "fi" && categoria == 1) {
//     valorTotal = Number(fi1 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + fi1 + "\n Valor Total: " + valorTotal);

// }else if (tipoDoJogo == "do" && etapaDoJogo == "fi" && categoria == 2) {
//     valorTotal = Number(fi2 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + fi2 + "\n Valor Total: " + valorTotal);

// }else if (tipoDoJogo == "do" && etapaDoJogo == "fi" && categoria == 3) {
//     valorTotal = Number(fi3 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + fi3 + "\n Valor Total: " + valorTotal);

// }else {
//     valorTotal = Number(fi4 * quantidadeIngresso);
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: " + fi4 + "\n Valor Total: " + valorTotal);
// }




// // Internacional

// if (tipoDoJogo == "in" && etapaDoJogo == "sf" && categoria == 1) {
//     valorTotal = Number(sf1 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + sf1 + "\n Valor Total: R$" + valorTotal);

// }else if (tipoDoJogo == "in" && etapaDoJogo == "sf" && categoria == 2) {
//     valorTotal = Number(sf2 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + sf2 + "\n Valor Total: R$" + valorTotal);

// }else if (tipoDoJogo == "in" && etapaDoJogo == "sf" && categoria == 3) {
//     valorTotal = Number(sf3 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + sf3 + "\n Valor Total: R$" + valorTotal);

// }else {
//     valorTotal = Number(sf4 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + sf4 + "\n Valor Total: R$" + valorTotal);
// }

// //DT     
// if (tipoDoJogo == "in" && etapaDoJogo == "dt" && categoria == 1) {
//     valorTotal = Number(dt1 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + dt1 + "\n Valor Total: R$" + valorTotal);

// }else if (tipoDoJogo == "in" && etapaDoJogo == "dt" && categoria == 2) {
//     valorTotal = Number(dt2 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + dt2 + "\n Valor Total: R$" + valorTotal);

// }else if (tipoDoJogo == "in" && etapaDoJogo == "dt" && categoria == 3) {
//     valorTotal = Number(dt3 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + dt3 + "\n Valor Total: R$" + valorTotal);

// }else {
//     valorTotal = Number(dt4 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + dt4 + "\n Valor Total: R$" + valorTotal);
// }

// //FI

// if (tipoDoJogo == "in" && etapaDoJogo == "fi" && categoria == 1) {
//     valorTotal = Number(fi1 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + fi1 + "\n Valor Total: R$" + valorTotal);

// }else if (tipoDoJogo == "in" && etapaDoJogo == "fi" && categoria == 2) {
//     valorTotal = Number(fi2 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + fi2 + "\n Valor Total: R$" + valorTotal);
// }else if (tipoDoJogo == "in" && etapaDoJogo == "fi" && categoria == 3) {
//     valorTotal = Number(fi3 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + fi3 + "\n Valor Total: R$" + valorTotal);
// }else {
//     valorTotal = Number(fi4 * (quantidadeIngresso * 4.10));
//     console.log("----Dados da Compra----\n Nome do Cliente: " + nomeCompleto +
//         "\n Tipo do Jogo: " + tipoDoJogo + "\n Etapa do Jogo: " + etapaDoJogo +
//         "\n Categoria: " + categoria + "\n Quantidade de Ingressos:" + quantidadeIngresso +
//         "\n----Valores----\n" + "Valor do Ingresso: R$" + fi4 + "\n Valor Total: R$" + valorTotal);
// }








