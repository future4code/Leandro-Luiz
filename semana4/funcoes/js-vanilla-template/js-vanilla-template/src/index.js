// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// Leia o código abaixo:

    // const minhaFuncao = (quantidade) => {
    // 	const array = []
    // 	for(let i = 0; i < quantidade; i+=2) {
    // 			for(let j = 0; j < i; j++) {
    // 				array.push(j)
    // 			}
    // 	}
    // 	return array
    // }

    // console.log(minhaFuncao(8));

// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
// R: []
//
// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
// R: (6) [0, 1, 0, 1, 2, 3]
//
// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
// R: (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
//

//Exercicio 2

// Leia o código abaixo:

    // let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];
    
    // const funcao = (lista, nome) => {
    //   for (let i = 0; i < lista.length; i++) {
    //     if (lista[i] === nome) {
    //       return i;
    //     }
    //   }
    // };
    
    // console.log(funcao(arrayDeNomes, "Darvas"));
    // console.log(funcao(arrayDeNomes, "João"));
    // console.log(funcao(arrayDeNomes, "Paula"));

// a. Explicite quais são as saídas impressas no console
// R: 0
//    2
//    undefined
//
// b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  
//    e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
// R: O código funcionaria no array de números, mas se ao comparar fosse feito a comparação com números 
//    e não nomes também, senão a comparação iria retornar undefined.
//

//Exercicio 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. 
// Explique rapidamente o que ela faz e sugira um nome melhor para ela!

    // function metodo(array) {
    //   let resultadoA = 0;
    //   let resultadoB = 1;
    //   let arrayFinal = [];
    
    //   for (let x of array) {
    //     resultadoA += x;
    //     resultadoB *= x;
    //   }
    
    //   arrayFinal.push(resultadoA);
    //   arrayFinal.push(resultadoB);
    //   return arrayFinal;
    // }

//
//R: O retorno será vazio ou null, pois não foi considerado nenhum valor para dentro da array, pra que o
//   vetor pudesse andar e fazer os calculos, sendo assim sem valor, o array que poderia ser chamado de 
//   resultado, não trouxe valor algum.


// **Exercícios de escrita de código**

// EXERCÍCIO 4

// Escreva as funções explicadas abaixo:
// a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e 
//   calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro
// - Exemplo
//     Para a entrada `4`, deve devolver `28`
//
// let numero; 
// function idadeCachorro(numero){    
//     let idadeHumano = 4 * numero;
//     return idadeHumano;
// }
// console.log(idadeCachorro(7));
//
// b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//     o nome (`string`), a idade (`number`), o endereço (`string`) 
 //    e um `boolean` que representa se é estudante ou não. 
 //    Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem 
 //      com o template:
//     Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.
// - Exemplo
//     Para a entrada:  `"Goli"`, `23`, `"Rua Guarapari 190"` e `true`, deve retornar:
//     `"Eu sou Goli, tenho 23 anos, moro em Rua Guarapari 190 e sou estudante."`
//
// let nome = ""; 
// let idade = 0;
// let endereco = "";
// let estudante = true;
// function informacoesPessoa(nome, idade, endereco, estudante){    
  
//     if(estudante === true){ 
//        let frase = [];
//        for(let i = 0; i < frase.length; i++){
//        nome = frase[i];    
//        idade = frase[i];
//        endereco = frase[i];
//        estudante = frase[i];
//        } 
//     } 
//     console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante.") ;
// }
// console.log(informacoesPessoa("Goli", 23, "Rua Guarapari 190", true));

//
//
//EXERCÍCIO 5

// O propósito desse exercício é que você determine a qual século um ano pertence. 
// Para isso, considere as seguintes afirmações:
//
// 1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc 
//    (se você quiser, pode implementar para um intervalo maior)
// 2. Ela deve retornar uma `string` com a mensagem: 
//    `O ano [ANO] pertence ao século [SÉCULO EM ALGARISMOS ROMANOS]` - Algarismos Romanos
// 3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor
// - Exemplo
//     Para o ano 1100, a saída seria: `O ano 1100 pertence ao século XI`
//     Para o ano 1101, a saída seria: `O ano 1101 pertence ao século XII`
//     Para o ano 1534, a saída seria: `O ano 1534 pertence ao século XVI`
//     Para o ano 1630, a saída seria: `O ano 1630 pertence ao século XVII`
//
// let ano = 0;
// function pertenceSeculo(ano){
//     ano = (prompt("Qual ano quer consultar o século?"));
//     if (ano <= 1000){
//         console.log("Século abaixo do X");
//     } else if(ano > 1000 && ano <= 1100){
//        console.log("O ano " + ano + " pertence ao século XI");
//     } else if(ano > 1100 && ano <= 1200){
//         console.log("O ano " + ano + " pertence ao século XII");
//     } else if(ano > 1200 && ano <= 1300){
//         console.log("O ano " + ano + " pertence ao século XIII");    
//     } else if(ano > 1300 && ano <= 1400){
//         console.log("O ano " + ano + " pertence ao século XIV");
//     } else if(ano > 1400 && ano <= 1500){
//         console.log("O ano " + ano + " pertence ao século XV");
//     } else if(ano > 1500 && ano <= 1600){
//         console.log("O ano " + ano + " pertence ao século XVI"); 
//     } else if(ano > 1600 && ano <= 1700){
//         console.log("O ano " + ano + " pertence ao século XVII");       
//     } else if(ano > 1700 && ano <= 1800){
//         console.log("O ano " + ano + " pertence ao século XVIII");    
//     } else if(ano > 1800 && ano <= 1900){
//         console.log("O ano " + ano + " pertence ao século XIX");    
//     } else if(ano > 1900 && ano <= 2000){
//         console.log("O ano " + ano + " pertence ao século XX");
//     } else if(ano > 2000 && ano <= 2100){
//         console.log("O ano " + ano + " pertence ao século XXI");  
//     }else{
//         console.log("Século a frente do atual");
//     }          
// }

// console.log(pertenceSeculo());


//Exercício 6
//
//Para os itens a seguir, considere o seguinte array para os seus testes:
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
// R:
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
//
// function quantidadeArray(array){
//     quantidadeElementos = array.length;
// }
// console.log(array);
//
//
// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
// R:
//
// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
// R:
//
// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar 
//    se o número é par
// R:
//

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let numero = 0;
// let arrayPar = [];
// let arrayImpar = [];

// function parImpar(numero){
//     for (let i = 0; i < array.length; i++){
//     numero = array[i];
//         if (numero % 2 === 0){
//         arrayPar = numero;     
//         console.log("Os números " + numero + "são pares");
//         } else {
//         arrayImpar = numero;    
//         console.log("Os números " + numero + " são ímpares");
//         }

//     }
      
// }

 //console.log(parImpar());


// let verificaParidade = function (numero) {
//     console.log("Começo")
//     if (numero % 2 === 0) {
//         return "É par"
//     } else {
//         return "É ímpar"
//     }

// }

// console.log(verificaParidade(6))

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
	let numero = 0;
	let arrayPar = [];
	let arrayImpar = [];
	
	function parImpar(numero){
	    for (let i = 0; i < array.length; i++){
	    numero = array[i];
	        if (numero % 2 === 0){
	        arrayPar[i] = numero;     
	        return("Os números " + arrayPar[i] + "são pares");
	        } else {
	        arrayImpar[i] = numero;    
	        return("Os números " + arrayImpar[i] + " são ímpares");
	        }
	
	    }
	      
	}
	
	console.log(parImpar(numero));