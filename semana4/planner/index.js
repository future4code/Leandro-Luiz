function adicionarTarefa(){
    const novaTarefa = document.getElementById("tarefaNova").value;
    const selecaoDoDia = document.getElementById("selecaoDia").value;
    

    if(novaTarefa == " " || novaTarefa == ""){
        console.log(alert("Digitar Tarefa Válida"));
    }else
    
    if (selecaoDoDia == 'domingo') {
         document.getElementById('domingo').innerHTML += "\n<span>" + novaTarefa + "</span>\n\n/";

	} else if (selecaoDoDia == 'segunda'){
        document.getElementById('segunda').innerHTML += "\n<span>" + novaTarefa + "</span>\n\n/";
        
	}else if (selecaoDoDia == 'terca') {
        document.getElementById('terca').innerHTML += "\n<span>" + novaTarefa + "</span>\n\n/";
        
	} else if (selecaoDoDia == 'quarta') {
        document.getElementById('quarta').innerHTML += "\n<span>" + novaTarefa + "</span>\n\n/";
        
	} else if (selecaoDoDia == 'quinta') {
        document.getElementById('quinta').innerHTML += "\n<span>" + novaTarefa + "</span>\n\n/";
        
	} else if (selecaoDoDia == 'sexta') {
        document.getElementById('sexta').innerHTML += "\n<span>" + novaTarefa + "</span>\n\n/";
        
	} else if (selecaoDoDia == 'sabado') {
        document.getElementById('sabado').innerHTML += "\n<span>" + novaTarefa + "</span>\n\n/";
        
	}
    document.getElementById('tarefaNova').value = "";
     
}