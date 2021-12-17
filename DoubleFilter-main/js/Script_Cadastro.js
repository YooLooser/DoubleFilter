function addUsuario(nome, sobrenome, cpf, dataNascimento, 
	email, cep, cidade, rua, numero, bairro, usuario, senha) {
  this.nomeCompleto = [nome, sobrenome];
  this.cpf = cpf;
  this.dataNascimento = dataNascimento;
  this.email = email;
  this.endereco = [cep, cidade, rua, numero, bairro];
  this.usuario = usuario;
  this.senha = senha;
  logado = false;
}

function validacao() {
	if (validar()) {
		alert("Cadastro efetuado com sucesso!");
		localStorage.setItem('perfil', JSON.stringify(cliente));
		document.location.reload(true);
	} 
}

function validar() {
	var nome = document.getElementById('nome');
	var sobrenome = document.getElementById('sobrenome');
	let inputCpf = document.getElementById('cpf');
	var cpf = inputCpf.value.replace(/[^\d]+/g,'');
	var dataNascimento = document.getElementById('dataNascimento');
	var email = document.getElementById('email');
	var cep = document.getElementById('cep');
	var cidade = document.getElementById('cidade');
	var rua = document.getElementById('rua');
	var numero = document.getElementById('numero');
	var bairro = document.getElementById('bairro');
	var usuario = document.getElementById('usuario');
	var senha = document.getElementById('senha');
	var confirm_senha = document.getElementById('confirm_senha');

	if (nome.value == "") {
		alert("Nome não informado!");
		document.getElementById('nome').focus();
		return false;
	}

	if (sobrenome.value == "") {
		alert("Sobrenome não informado!");
		document.getElementById('sobrenome').focus();
		return false;
	}

	if (cpf.value == "") {
		alert("CPF não informado!");
		document.getElementById('cpf').focus();
		return false;
	}

	if (!(validarData(dataNascimento.value))) {
		alert("Por favor, informe uma data de nascimento válida!");
		document.getElementById('dataNascimento').focus();
		return false;
	}

	if (!(validarEmail(email))) {
		alert( "Por favor, informe um e-mail válido!" );
		document.getElementById('email').focus();
		return false;
	} 

	if (cep.value == "") {
		alert("CEP não informado!");
		document.getElementById('cep').focus();
		return false;
	} 

	if (cidade.value == "") {
		alert("Cidade não informada!");
		document.getElementById('cidade').focus();
		return false;
	} 

	if (rua.value == "") {
		alert("Rua não informada!");
		document.getElementById('rua').focus();
		return false;
	} 

	if (numero.value == "") {
		alert("Número não informado!");
		document.getElementById('numero').focus();
		return false;
	} 

	if (bairro.value == "") {
		alert("Bairro não informado!");
		document.getElementById('bairro').focus();
		return false;
	} 

	if (usuario.value == "") {
		alert("Nome de usuário não informado!");
		document.getElementById('usuario').focus();
		return false;
	} 

	if (testaCPF(cpf)) {
		var i = validarSenha(senha,confirm_senha);
		if (i) {
			cliente = new addUsuario(nome.value, sobrenome.value, cpf.value, dataNascimento.value, email.value, cep.value, cidade.value, rua.value, numero.value, bairro.value, usuario.value, senha.value);
			return i;
		}
		return i;
	} else {
		alert("CPF inválido!");
		document.getElementById('cpf').focus();
		return false;
	}
}

function validarData(data){

	data = data.replace(/\//g, "-");
	var data_array = data.split("-");
   
	if(data_array[0].length != 4){
    	data = data_array[2]+"-"+data_array[1]+"-"+data_array[0];
   	}
   
	var hoje = new Date();
	var nasc  = new Date(data);
	var idade = hoje.getFullYear() - nasc.getFullYear();
	var m = hoje.getMonth() - nasc.getMonth();

	if ((m < 0) || ((m === 0) && (hoje.getDate() < nasc.getDate()))) idade--;
   
	if(idade < 18){
		alert("Pessoas menores de 18 não podem se cadastrar.");
    	return false;
   	}

   	if(idade >= 18 && idade <= 110){
    	return true;
   	}

   	return false;
}

function validarEmail(email) {
	if ((email.value == "") 
		|| (email.value.indexOf('@') == -1) 
		|| (email.value.indexOf('.') == -1)) {

		return false;
	}
	return true;
}

function testaCPF(strCPF) {
    var soma;
    var resto;
    var i;
    soma = 0;
  	if (strCPF == "00000000000") return false;

  	for (i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  	resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10)) ) return false;

  	soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function validarSenha(senha,confirm_senha) {
	if (senha.value == "") {
		alert("Senha não informada!");
		document.getElementById('senha').focus();
		return false;
	} else {
		if ((senha.length < 8)&&(senha.length > 20)) {
			alert("A senha deve conter de 8 a 20 caracteres!");
			document.getElementById('senha').focus();
			return false;
		}
	}

	if (confirm_senha.value == "") {
		alert("Você deve repetir a senha informada!");
		document.getElementById('confirm_senha').focus();
		return false;
	} 

	if (confirmSenha(senha,confirm_senha)) {
		return true;
	} else {
		alert("Campo com valor incorreto! Informe novamente a sua senha.");
		document.getElementById('confirm_senha').focus();
		return false;
	}
}

function confirmSenha(senha,confirm_senha) {
	if (senha.value == confirm_senha.value) {
		return true;
	} else {return false;}
}

function validarCEP() {
	let inputCep = document.getElementById('cep');
	let cep = inputCep.value.replace('-','');
	let xhr = new XMLHttpRequest();
	xhr.open('GET','https://viacep.com.br/ws/' + cep + '/json',true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				preencheCampos(JSON.parse(xhr.responseText));
			}
			else {
				preencheCampos(JSON.parse(xhr.responseText));
			}
		}
	}

	xhr.send();	
}

function preencheCampos(json) {
	if ((json.localidade != null)&&(json.localidade != '')) {
		document.getElementById('cidade').value = json.localidade;
	} else {document.getElementById('cidade').removeAttribute('disabled')}

	if ((json.bairro != null)&&(json.bairro != '')) {
		document.getElementById('bairro').value = json.bairro;
	} else {document.getElementById('bairro').removeAttribute('disabled')}

	if ((json.logradouro != null)&&(json.logradouro != '')) {
		document.getElementById('rua').value = json.logradouro;
	} else {document.getElementById('rua').removeAttribute('disabled')}

	if ((json.unidade != null)&&(json.unidade != '')) {
		document.getElementById('numero').value = json.unidade;
	} else {document.getElementById('numero').removeAttribute('disabled')}
}