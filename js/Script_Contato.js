function validacao() {
	if (validar()) {
		alert("Mensagem enviada com sucesso. A Double Filter agradece pelo feedback!");
		document.location.reload(true);
	} 
}

function validar() {
	var nome = document.getElementById('nome');
	var email = document.getElementById('email');
	var assunto = document.getElementById('inputAssunto');
	var mensagem = document.getElementById('caixa_de_texto');

	if (nome.value == "") {
		alert("Nome não informado!");
		document.getElementById('nome').focus();
		return false;
	}

	if (!(validarEmail(email))) {
		alert( "Por favor, informe um e-mail válido!" );
		document.getElementById('email').focus();
		return false;
	} 

	if (assunto.value == "") {
		alert("Assunto não informado!");
		document.getElementById('inputAssunto').focus();
		return false;
	}

	if (mensagem.value == "") {
		alert("Você deve escrever uma mensagem.");
		document.getElementById('caixa_de_texto').focus();
		return false;
	}
	return true;
}

function validarEmail(email) {
	if ((email.value == "") 
		|| (email.value.indexOf('@') == -1) 
		|| (email.value.indexOf('.') == -1)) {

		return false;
	}
	return true;
}