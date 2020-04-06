// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */


// console.log("Bem vindo ao jogo BlackJack");
// let carta = 0;
// let valor = 0;
// let usuarioCarta1 = 0;
// let usuarioCarta2 = 0;
// let usuarioCarta = 0;
// let usuarioCartaTexto1 = "";
// let usuarioCartaTexto2 = "";
// let pcCarta1 = 0;
// let pcCarta2 = 0;
// let pcCartaTexto1 = "";
// let pcCartaTexto2 = "";

// if(confirm("Quer iniciar uma nova rodada?")) {
//    for(let i=0; i < 1; i++){   
//    carta = comprarCarta();
//    usuarioCarta1 = usuarioCarta1 + carta.valor;
//    usuarioCartaTexto1 = usuarioCartaTexto1 + carta.texto;
//    carta = comprarCarta();
//    usuarioCarta2 = usuarioCarta2 + carta.valor;
//    usuarioCartaTexto2 = usuarioCartaTexto2 + carta.texto;
//    usuarioCarta = usuarioCarta1 + usuarioCarta2;
//    }

//    for(let i=0; i < 1; i++){
//       carta = comprarCarta();
//       pcCarta1 = pcCarta1 + carta.valor;
//       pcCartaTexto1 = pcCartaTexto1 + carta.texto;
//       carta = comprarCarta();
//       pcCarta2 = pcCarta2 + carta.valor;
//       pcCartaTexto2 = pcCartaTexto2 + carta.texto;
//       pcCarta = pcCarta1 + pcCarta2;
//       }
//    if(usuarioCarta > pcCarta){
//       console.log("Usuário - cartas:" + usuarioCartaTexto1 + " " + usuarioCartaTexto2 + " - pontuação " + usuarioCarta);
//       console.log("Computador - cartas:" + pcCartaTexto1 + " " + pcCartaTexto2 + " - pontuação " + pcCarta);
//       console.log("O usuário ganhou!");
//    }else if (pcCarta > usuarioCarta){
//       console.log("Computador - cartas:" + pcCartaTexto1 + " " + pcCartaTexto2 + " - pontuação " + pcCarta);
//       console.log("Usuário - cartas:" + usuarioCartaTexto1 + " " + usuarioCartaTexto2 + " - pontuação " + usuarioCarta);
//       console.log("O Computador ganhou!"); 
//    }else{
//       console.log("Computador - cartas:" + pcCartaTexto1 + " " + pcCartaTexto2 + " - pontuação " + pcCarta);
//       console.log("Usuário - cartas:" + usuarioCartaTexto1 + " " + usuarioCartaTexto2 + " - pontuação " + usuarioCarta);
//       console.log("Jogue novamente empatou");
//    } 
// } else {
// 	console.log("O jogo acabou");
// }