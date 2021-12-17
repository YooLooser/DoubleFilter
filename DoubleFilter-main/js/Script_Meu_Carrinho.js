var meuCarrinho = JSON.parse(localStorage.getItem("carrinho"));
var cliente = JSON.parse(localStorage.getItem("perfil"));


function showCarrinho() {
	if (meuCarrinho == null) {
		var sair;
		criarMsgEmptyKart();
		sair = confirm("Seu carrinho ainda está vazio, deseja conhecer nossa linha de produtos Double Filter?");
		if (sair) {
			window.location.href = "Produtos.html";
		}
	} else {
		for (var i = 0; i < meuCarrinho.length; i++) {
			if ((meuCarrinho[i] != null)||(meuCarrinho[i] != "")) {
				criarCard(meuCarrinho[i].foto, meuCarrinho[i].nome, meuCarrinho[i].quantidade, meuCarrinho[i].valor, meuCarrinho[i].codigo);
			}
		}
	}
}

function criarMsgEmptyKart() {
	let div1 = document.createElement("div");
	let div2 = document.createElement("div");
	let div3 = document.createElement("div");

	let imagem = document.createElement("img");

	let descricao = document.createElement("p");

	let urlP = document.createElement("a");

	let titulo = document.createElement("h2");

	div1.setAttribute("class", "cardNull");
	imagem.setAttribute("src", "imagens/icones/carrinho_vazio.png");
	urlP.setAttribute("href", "Produtos.html");

	let h2Text = document.createTextNode("Seu carrinho está vazio!");
	titulo.appendChild(h2Text);
	let urlText = document.createTextNode("Produtos");
	urlP.appendChild(urlText);
	let descricaoText = document.createTextNode("Acesse a página de ");
	descricao.appendChild(descricaoText);
	descricao.appendChild(urlP);
	descricaoText = document.createTextNode(" e conheça a linha Double Filter.");
	descricao.appendChild(descricaoText);

	div3.appendChild(imagem);
	div2.appendChild(titulo);
	div2.appendChild(descricao);
	div1.appendChild(div2);
	div1.appendChild(div3);
	document.getElementById("rowBox").appendChild(div1);
}

function criarCard(foto, nome, quantidade, valor, codigo) {
	console.log(codigo);

	let div1 = document.createElement("div");
	let div2 = document.createElement("div");
	let div3 = document.createElement("div");
	let div4 = document.createElement("div");

	let imagem = document.createElement("img");

	let descricao1 = document.createElement("p");

	let labelQnt = document.createElement("label");
	let inputQnt = document.createElement("input");
	let botao = document.createElement("button");

	let titulo = document.createElement("h2");
	let preco = document.createElement("h6");

	div1.setAttribute("class", "card");
	div2.setAttribute("class", "card-image");
	div3.setAttribute("class", "card-body");
	div4.setAttribute("class", "product-box-button");

	preco.setAttribute("id", "preco" + codigo + "");

	imagem.setAttribute("class", "product-img");
	imagem.setAttribute("src", foto);

	let h2Text = document.createTextNode(nome);
	titulo.appendChild(h2Text);
	let descricaoText = document.createTextNode(quantidade);
	descricao1.appendChild(descricaoText);
	let precoText = document.createTextNode("R$" + valor.toFixed(2));
	preco.appendChild(precoText);

	let labelText = document.createTextNode("Qnt: ");
	labelQnt.appendChild(labelText);

	inputQnt.setAttribute("type", "number");
	inputQnt.setAttribute("value", "1");
	inputQnt.setAttribute("min", "1");
	inputQnt.setAttribute("max", "10");
	inputQnt.setAttribute("id", "qnt" + codigo + "");
	inputQnt.setAttribute("onchange", "valorUnidade(this.id)");
	inputQnt.setAttribute("name", "quantidade");

	botao.setAttribute("type", "button");
	botao.setAttribute("class", "product-button");
	botao.setAttribute("onclick", "removerItem(this.id)");
	let buttonText = document.createTextNode("Remover Item");
	botao.appendChild(buttonText);

	labelQnt.appendChild(inputQnt);
	div4.appendChild(labelQnt);
	div4.appendChild(botao);
	div3.appendChild(titulo);
	div3.appendChild(descricao1);
	div3.appendChild(preco);
	div3.appendChild(div4);
	div2.appendChild(imagem);
	div1.appendChild(div2);
	div1.appendChild(div3);
	document.getElementById("rowBox").appendChild(div1);
}

function valorUnidade(id) {
	var cod = parseInt(id.replace('qnt',''), 10);
	var qnt = document.getElementById(id).value;
	var preco;
	var total;
	for (var i = 0; i < meuCarrinho.length; i++) {
		if (((meuCarrinho[i] != null)||(meuCarrinho[i] != "")) && (cod == meuCarrinho[i].codigo)) {
			preco = meuCarrinho[i].valor;
			total = preco * qnt;
			document.getElementById("preco" + cod + "").firstChild.nodeValue = "R$" + total.toFixed(2);
		}
	}
	valorTotal();
}

function valorTotal() {
	var total = 0;
	var aux;
	var i;
	var j;
	for (i = 0; i < meuCarrinho.length; i++) {
		if ((meuCarrinho[i] != null)||(meuCarrinho[i] != "")) {
			for (j = 0; j <= 16; j++) {
				if (j == meuCarrinho[i].codigo) {
					aux = parseFloat(document.getElementById("preco" + j + "").firstChild.nodeValue.replace('R$',''));
					console.log(aux);
					total = total + aux;
					console.log(total);
				}
			}
		}
	}
	document.getElementById("valorTotal").firstChild.nodeValue = "R$" + total.toFixed(2);
}

function removerItem(id) {
	var pos = parseInt(id.replace('qnt',''), 10);
	console.log(meuCarrinho);
	meuCarrinho.splice(pos-1, 1);
	console.log(meuCarrinho);
	alert(meuCarrinho);
	localStorage.setItem('carrinho', JSON.stringify(meuCarrinho));
	location.reload();
}

function finalizarCompra() {
	if (meuCarrinho == null) {
		alert("Seu carrinho está vazio! Conheça nossa linha de produtos e adicione ao carrinho.");
		window.location.href = "Produtos.html";
	} else {
		if (cliente.logado) {
			alert("Compra finalizada com sucesso!");
			meuCarrinho = null;
			localStorage.setItem('carrinho', JSON.stringify(meuCarrinho));
		} else {
			alert("Você precisar estar logado para finalizar a compra!");
			window.location.href = "Minha_Conta.html";
		}
	}
}