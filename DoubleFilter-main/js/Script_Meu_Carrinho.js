var meuCarrinho = JSON.parse(localStorage.getItem("carrinho"));
var cliente = JSON.parse(localStorage.getItem("perfil"));

function showCarrinho() {
	var divBox = document.querySelector(".carrousel-produtos");
	var j = meuCarrinho.length;

	if (j = 0) {
		var sair = confirm("Seu carrinho ainda está vazio, deseja conhecer nossa linha de produtos Double Filter?");
		if (sair) {
			window.location.href = "Produtos.html"
		} else {
			
		}
	} else {
		for (var i = 0; i < j; i++) {
			if ((meuCarrinho[i] == null)||(meuCarrinho[i] == "")) {
				
			} else {
				criarCard(meuCarrinho[i].Produtos[i].foto.value, meuCarrinho[i].Produtos[i].nome.value, meuCarrinho[i].Produtos[i].quantidade.value, meuCarrinho[i].Produtos[i].valor.value);
			}
		}
	}
}

function criarCard(foto, nome, quantidade, valor) {
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
	div1.setAttribute("class", "product-box-button");

	imagem.setAttribute("class", "product-img");
	imagem.setAttribute("src", foto);

	


	inputQnt.setAttribute("type", "number");
	inputQnt.setAttribute("value", "1");
	inputQnt.setAttribute("name", "quantidade");

	botao.setAttribute("type", "button");
	botao.setAttribute("class", "product-button");
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