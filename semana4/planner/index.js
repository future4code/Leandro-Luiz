function adicionarTarefa(){
    const novaTarefa = document.getElementById("tarefaNova").value;
    const selecaoDoDia = document.getElementById("selecaoDia").value;
    
    //document.getElementById("domingo").innerHTML = "<p>" + novaTarefa + "</p>";

    //minhaTarefa.innerHTML = minhaTarefa + "<li>" + novaTarefa.value + "<li>";

    if(novaTarefa == " " || novaTarefa == ""){
        console.log(alert("Digitar Tarefa Válida"));
    }else
    
    if (selecaoDoDia == 'domingo') {
         document.getElementById('domingo').innerHTML = "Domingo" + "<p>" + novaTarefa + "</p>";

	} else if (selecaoDoDia == 'segunda'){
        document.getElementById('segunda').innerHTML = "Segunda-Feira" + "<p>" + novaTarefa + "</p>";
        
	}else if (selecaoDoDia == 'terca') {
        document.getElementById('terca').innerHTML = "Terça-Feira" + "<p>" + novaTarefa + "</p>";
        
	} else if (selecaoDoDia == 'quarta') {
        document.getElementById('quarta').innerHTML = "Quarta-Feira" + "<p>" + novaTarefa + "</p>";
        
	} else if (selecaoDoDia == 'quinta') {
        document.getElementById('quinta').innerHTML = "Quinta-Feira" + "<p>" + novaTarefa + "</p>";
        
	} else if (selecaoDoDia == 'sexta') {
        document.getElementById('sexta').innerHTML = "Sexta-Feira" + "<p>" + novaTarefa + "</p>";
        
	} else if (selecaoDoDia == 'sabado') {
        document.getElementById('sabado').innerHTML = "Sábado" + "<p>" + novaTarefa + "</p>";
        
	}
    document.getElementById('tarefaNova').value = "";
     
}