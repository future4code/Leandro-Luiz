/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Bem vindo ao jogo BlackJack");
 
// if(confirm("Quer iniciar uma nova rodada?")){ 
  
   
   
// }else {
// 	console.log("O jogo acabou");
// }


// const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

console.log("Bem vindo ao jogo BlackJack");

let novarodada;
const usuarioPontos = 0;
const pcPontos = 0;
//novarodada = (confirm("pergunta de sim ou não"));
if (novarodada === false){
   console.log("O jogo acabou");
}else{
   while(novarodada === true){
      const usuarioCarta1 = comprarCarta;
      const usuarioCarta2 = comprarCarta; 
      const pcCarta1 = comprarCarta;
      const pcCarta2 = comprarCarta;
      usuarioPontos = usuarioCarta1.valor + usuarioCarta2.valor;
      pcPontos = pcCarta1.valor + pcCarta2.valor; 
   }
   if(usuarioPontos > pcPontos){
     
      console.log("O usuário ganhou!");
   } else (pcPontos > usuarioPontos)
      console.log("O computador ganhou!");
}

novarodada = confirm("Quer iniciar uma nova rodada?");