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
   
   if(confirm("Suas cartas são " + usuarioCartaTexto[0] + usuarioCartaTexto[1] + 
           ". A carta revelada do computador é " 
            + pcCartaTexto[0] +".\n"+  // \n faz pular a linha
           "Deseja comprar mais uma carta?"))
   {
      carta = comprarCarta();
      usuarioCarta[i] = carta.valor;
      usuarioCartaTexto[i] = carta.texto;
      usuarioCarta1 = usuarioCarta1 + usuarioCarta[i];       
   
    
            if (usuarioCarta1 < 21){
               usuarioCarta[i] = carta.valor;
               usuarioCartaTexto[i] = carta.texto;
               usuarioCarta1 = usuarioCarta1 + usuarioCarta[i];
            }
         }

   if(usuarioCarta1 <= 21 && pcCarta1 < 21 || pcCarta1 > 21){
      console.log("Usuário - cartas:" + usuarioCartaTexto[0] + usuarioCartaTexto[1] + usuarioCartaTexto[2] + " - pontuação " + usuarioCarta1);
      console.log("Computador - cartas:" + pcCartaTexto[0] + pcCartaTexto[1] + " - pontuação " + pcCarta1);
      console.log("O usuário ganhou!");

   }else if (pcCarta1 <= 21 && usuarioCarta1 < 21 || usuarioCarta1 > 21){
      console.log("Computador - cartas:" + pcCartaTexto[0] + pcCartaTexto[1] + " - pontuação " + pcCarta1);
      console.log("Usuário - cartas:" + usuarioCartaTexto[0] + usuarioCartaTexto[1] + usuarioCartaTexto[2] + " - pontuação " + usuarioCarta1);
      console.log("O Computador ganhou!"); 
   }else{
      console.log("Computador - cartas:" + pcCartaTexto[0] + pcCartaTexto[1] + pcCartaTexto[2] + " - pontuação " + pcCarta1);
      console.log("Usuário - cartas:" + usuarioCartaTexto[0] + usuarioCartaTexto[1] + usuarioCartaTexto[2] + " - pontuação " + usuarioCarta1);
      console.log("Jogue novamente empatou");
   } 
 } else {
	console.log("O jogo acabou");
}