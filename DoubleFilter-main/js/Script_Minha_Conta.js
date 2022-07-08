var cliente = JSON.parse(localStorage.getItem("perfil"));

function verificarLogado() {
	if (cliente.logado) {
		var option = confirm("Você já está logado como " + cliente.nomeCompleto[0] + " " + cliente.nomeCompleto[1] + ". Deseja sair para iniciar uma nova sessão?");
		
		if (option == true) {
			cliente.logado = false;
			alert(cliente.nomeCompleto[0] + " " + cliente.nomeCompleto[1] + " saiu da sessão! Efetue novamente o login.");
		} else {
			window.location.href = "Produtos.html";
		}
	}
}

function logarConta() {
	var inputUsuario = document.getElementById("usuario").value;
	var inputSenha = document.getElementById("senha").value;
	var usuario = cliente.usuario;
	var email = cliente.email;
	var senha = cliente.senha;

	if ((inputUsuario == usuario) || (inputUsuario == email)) {
		if (inputSenha == senha) {
			alert("Login efetuado com sucesso!");
			cliente.logado = true;
			localStorage.setItem('perfil', JSON.stringify(cliente));
			window.location.href = "Produtos.html";
		} else {
			alert("Senha incorreta!");
		}
	} else {
		alert("Usuário/E-mail inválido ou inexistente! Insira um usuário válido.");
	}
}