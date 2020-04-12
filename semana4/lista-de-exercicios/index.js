// Aula 14 - 

// Exercicio de Leitura de Código

// 1- Resposta: R$500

//2- Respostas: 
    // 165
    // Vai mostrar a tela de Alerta com a mensagem "Tipo de Investimento informado incorreto!"

//3. Rspostas:
// Quantidade total de números 14
// 6
// 8

//4. Respostas:
// numero1
// 25
// 12
// 55
// 64
// 121
// 44
// 11
// 84
// 51
// 48
// 14
// 73
// 111
// 283
// 1
// 99
// 13
// 31
// 83
// 131
// 1
// 1.1
// 25
// 1590
// numero2
// -10

//Exercícios de lógica de programação
// 1. Para este exercício considere as seguintes variáveis:
//
//         const booleano1 = true
//         const booleano2 = false
//         const booleano3 = !booleano2
//         const booleano4 = !booleano3 
//
//     Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

        // a) `booleano1 && booleano2 && !booleano4`
        // R: false

        // b) `(booleano1 && booleano2) || !booleano3`
        // R: true  

        // c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
        // R: true           

        // d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
        // R: true                             

        // e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
        // R:false                               


    2. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros números pares (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

            const quantidadeDeNumerosPares
            let i = 0
            while(i <= quantidadeDeNumerosPares) {
              console.log(i*2)
            }

        Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.

    3. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele é equilátero, isósceles ou escaleno.

    4. Faça um programa que, dados dois números,

        i. indique qual é o maior,

        ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

        iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)

        Um exemplo:

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3961a32-1d25-4c39-ac2b-c3b7333d9cc6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3961a32-1d25-4c39-ac2b-c3b7333d9cc6/Untitled.png)