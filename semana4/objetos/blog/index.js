 function salvarPost(){
       const tituloPost = document.getElementById('titulo').value;
       const nomeAutor = document.getElementById("nome").value;
       const mensagem =  document.getElementById("msg").value;
}

const Post ={
     tituloPost: titulo,
     nomeAutor: nome,
     msgPost: msg
}

arrayPost = [{ armazenarPost }];

if (arrayPost !== "") {
      document.getElementById('titulo').innerHTML += "\n<span>" + tituloPost + "</span>\n\n/";
      document.getElementById('nome').innerHTML += "\n<span>" + nomeAutor + "</span>\n\n/";
      document.getElementById('msg').innerHTML += "\n<span>" + msgPost + "</span>\n\n/";
      
      document.getElementById('titulo').value = "";
      document.getElementById('nome').value = "";
      document.getElementById('msg').value = "";
}

console.log(arrayPost);

