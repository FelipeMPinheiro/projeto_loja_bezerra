document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

	function validaFormulario(){

		if(document.getElementById("nome-do-usuario").value != "" && 
			document.getElementById("email-do-usuario").value != "" && 
	 		document.getElementById("texto-do-usuario").value != "" && 
	 		document.getElementById("telefone-do-usuario").value != "")
		{alert("Mensagen enviada com sucesso!")
		}else{
			alert("Preencha todos os campos")
		}
}



