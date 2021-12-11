var meuCarrinho = JSON.parse(localStorage.getItem("carrinho"));
var cliente = JSON.parse(localStorage.getItem("perfil"));

function showCarrinho() {
	var divBox = document.querySelector(".carrousel-produtos");
	var j = meuCarrinho.length;

	if (j = 0) {

	} else {
		for (var i = 0; i < j; i++) {
			let div1 = document.createElement("div");
			let div2 = document.createElement("div");
			let div3 = document.createElement("div");
			let div4 = document.createElement("div");
			let div5 = document.createElement("div");

			let imagem = document.createElement("img");

			let descricao1 = document.createElement("p");
			let descricao2 = document.createElement("p");

			let quantidade = document.createElement("input");

			let preco = document.createElement("h6");


		}
	}
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