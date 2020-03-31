// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado)

// resultado = (bool2 || bool1) && !bool3
// console.log("b. ", resultado)

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

// resultado = (resultado && (!bool1 || bool2)) && !bool3
// console.log("d. ", resultado)

// console.log("e. ", typeof resultado)

// Respostas Exercicios de Interpretação

// 1-
// a.  false
// b.  false
// c.  true
// d.  false
// e.  boolean

// let array
// console.log('I. ', array)

// array = null
// console.log('II. ', array)


// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('III. ', array.length)

// let i = 0
// console.log('IV. ', array[i], " e ", array[i+1])

// array[i+1] = 19
// const valor = array[i+6]
// console.log('V. ', array[i+1], " e ", valor)

// i+=1
// array[i] = array[i-1]
// console.log('VI. ', array[i])

// i = array.length - 1
// array[i] = array[i-3]
// const resultadoC = array[i]%array[1]
// console.log('VII. ', resultadoC)

// Respostas exercicio 2
// a. O que é `array` e como se declara em `JS`?
// R: Array é um vetor onde é possível se guardar e acessar um dado no mesmo momento
//    let myArray = [1,2,3,4,5];
//
// b. Qual o index inicial de um `array`?
// R: index 0
//   
// c. Como se determinar o tamanho do `array`?
// R: let myArray = [1,2,3,4,5];
//    console.log(myArray.length);
//
// d. Indique todas as mensagens impressas no console.
// R: 
// I. undefined
// II.  null
// III.  11
// IV.  3  e  4
// V.  19  e  9
// VI.  3
// VII.  1


//Exercícios de escrita de código
//Exercicio 1
//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
//let GRAUS_FAHRENHEIT = 77;
//let KELVIN = ((((GRAUS_FAHRENHEIT - 32)*5)/9) + 273.15);
//console.log(KELVIN);
//298.15

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32
//let GRAUS_CELSIUS = 80;
//let GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32;
//console.log(GRAUS_FAHRENHEIT);
//176

//Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
//let GRAUS_CELSIUS = 30
//let GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32;
//let KELVIN = GRAUS_CELSIUS + 273.15;
//console.log(GRAUS_FAHRENHEIT);
//console.log(KELVIN);
//86
//303.15

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
//const GRAUS_CELSIUS = prompt("Qual a temperatura em Graus Celsius?");
//let GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32;
//let KELVIN = GRAUS_CELSIUS + 273.15;
//console.log(Number(GRAUS_FAHRENHEIT));
//console.log(Number(KELVIN));


//Exercicio 2
//Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). 
//Imprima-as com as respostas no console da seguinte forma:
//
// const nome = prompt("Qual seu nome?");
// const sobrenome = prompt("Qual o seu sobrenome?");
// const idade = prompt("Qual a sua idade?");
// const cidade = prompt("Qual a cidade que você mora?");
// const estado = prompt("Qual o estado que você mora?");
// console.log(nome);
// console.log(sobrenome);
// console.log(Number(idade));
// console.log(cidade);
// console.log(estado);
// Leandro
// Luiz
// 36
// Ribeirão Preto
// São Paulo


//3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
//Sabe-se que o quilowatt-hora de energia custa R$0.05. 
//Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
//a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
//b. Altere o programa para receber mais um valor: a porcentagem de desconto. 
//   Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
//a.
//const quilowatt = 0.05;
//let consumo = 280;
//let valorPago = consumo * quilowatt;
//console.log("O valor a ser pago é de R$",valorPago);
//O valor a ser pago é de R$ 14

//b.
//let consumo = 280;
//const quilowatt = 0.05;
//const porcentagem = 15;
//let valorPago = consumo * quilowatt; //14
//let valorDesconto = valorPago * (15/100); //14 * 15%
//let valorTotal = valorPago - valorDesconto; 
//console.log("O valor a ser pago é de R$" + valorTotal + " com desconto.");
//O valor a ser pago é de R$11.9 com desconto.

//Desafio
//
//
//a. Procure uma forma de converter libra (lb) para quilograma (kg) e 
//escreva um programa que converta 20lb para kg. 
//Imprima  a resposta no console da seguinte forma: 20lb equivalem a X kg
// let libra = 20;
// let quilograma = libra / 2.205;
// console.log("20lb equivalem a " + quilograma + "kg.");
// 20lb equivalem a 9.070294784580499kg.
//
//b. Procure uma forma de converter onça (oz) para quilograma (kg) 
//e escreva um programa que converta 10.5oz para kg. 
//Imprima  a resposta no console da seguinte forma: 
//10.5oz equivalem a X kg
// let onca = 10.5;
// let quilograma = onca /  3.527;
// console.log("10.5oz equivalem a " + quilograma + "kg.");
// 10.5oz equivalem a 2.977034306776297kg.
//
//c. Procure uma forma de converter milha (mi) para metro (m) 
// e escreva um programa que converta 100mi para m. 
// Imprima  a resposta no console da seguinte forma: 
// 100mi equivalem a X m
// let milha = 100;
// let metro = milha / 2.237;
// console.log("100mi equivalem a " + metro + "m.");
// 100mi equivalem a 44.70272686633884m.
//
//d. Procure uma forma de converter pés (ft) para metro (m) 
// e escreva um programa que converta 50ft para m. 
// Imprima  a resposta no console da seguinte forma: 
// 50ft equivalem a X m
// let pes = 50;
// let metro = pes / 10.764;
// console.log("50ft equivalem a " + metro + "m.");
// 50ft equivalem a 4.645113340765515m.
//
//e. Procure uma forma de converter galão (gal) para litro (l) 
// e escreva um programa que converta 103.56gal para litro. 
// Imprima  a resposta no console da seguinte forma: 
// 103.56gal equivalem a X l
// let galao = 103.56;
// let litro = galao * 3.806;
// console.log("103.56gal equivalem a " + litro + " l.");
// 103.56gal equivalem a 394.14936 litro.
//
// f. Procure uma forma de converter xícara (xic) para litro (l) 
// e escreva um programa que converta 450xic para litro. 
// Imprima  a resposta no console da seguinte forma: 
// 450 xic equivalem a X l
// let xicara = 450;
// let litro = xicara / 3.52;
// console.log("450 xic equivalem a " + litro + " l.");
// 450 xic equivalem a 127.8409090909091 litro.
//
// g. Escolha ao menos um dos itens anteriores 
// e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter. 
// modificado letra (f)
// let xicara = prompt("O equivalente a quantas xicaras você tem?");
// let litro = xicara /3.52;
// console.log("As " + xicara + " que você tem equivalem a " + litro + " litros.");
// As 1590 que você tem equivalem a 451.70454545454544 litros.

