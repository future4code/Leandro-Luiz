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



console.log("Bem vindo ao jogo BlackJack");
let carta = 0;
//let valor = 0;
//let texto = "";
let i = 0;
let usuarioCarta = [];
let usuarioCarta1 = 0;
let usuarioCartaTexto = [];

let pcCarta = [];
let pcCarta1 = 0;
let pcCartaTexto = [];


if(confirm("Quer iniciar uma nova rodada?")) {
   for(i=0; i < 2; i++){   
   carta = comprarCarta();
   usuarioCarta[i] = carta.valor;
   usuarioCartaTexto[i] = carta.texto;
   usuarioCarta1 = usuarioCarta1 + usuarioCarta[i];
   }
      if(usuarioCarta[0] == 11 && usuarioCarta[1] == 11){
         for(i=0; i < 2; i++){   
            carta = comprarCarta();
            usuarioCarta[i] = carta.valor;
            usuarioCartaTexto[i] = carta.texto;
            usuarioCarta1 = usuarioCarta1 + usuarioCarta[i];
         }   
      } 
   for(i=0; i < 2; i++){   
      carta = comprarCarta();
      pcCarta[i] = carta.valor;
      pcCartaTexto[i] = carta.texto;
      pcCarta1 = pcCarta1 + pcCarta[i];
   }


   if(usuarioCarta1 > pcCarta1){
      console.log("Usuário - cartas:" + usuarioCartaTexto[i] + " - pontuação " + usuarioCarta1);
      console.log("Computador - cartas:" + pcCartaTexto[i] + " - pontuação " + pcCarta1);
      console.log("O usuário ganhou!");

   }else if (pcCarta1 > usuarioCarta1){
      console.log("Computador - cartas:" + pcCartaTexto[i] + " - pontuação " + pcCarta1);
      console.log("Usuário - cartas:" + usuarioCartaTexto[i] + " - pontuação " + usuarioCarta1);
      console.log("O Computador ganhou!"); 
   }else{
      console.log("Computador - cartas:" + pcCartaTexto[i] + " - pontuação " + pcCarta1);
      console.log("Usuário - cartas:" + usuarioCartaTexto[i] + " - pontuação " + usuarioCarta1);
      console.log("Jogue novamente empatou");
   } 
 } else {
	console.log("O jogo acabou");
}