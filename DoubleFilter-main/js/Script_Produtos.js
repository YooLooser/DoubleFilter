function Produtos(nome, foto, quantidade, valor) {
  this.nome = nome;
  this.foto = foto;
  this.quantidade = quantidade;
  this.valor = valor;
}

var kart = [];

var tabacos = [new Produtos("Hash", "imagens/produtos/tabacos/hash.jpg", "25g", 15.00),
new Produtos("Dipalha", "imagens/produtos/tabacos/dipalha.jpg", "30g", 12.00),
new Produtos("Amsterdam", "imagens/produtos/tabacos/amsterda.jpg", "25g", 16.90),
new Produtos("Raw", "imagens/produtos/tabacos/raw.jpg", "25g", 27.90)];

var sedas = [new Produtos("Papelito Tradicional King Size", "imagens/produtos/sedas/papelito_tradicional.jpg", "36 unidades", 4.50),
new Produtos("Seda Papelito Brown King Size", "imagens/produtos/sedas/papelito_brown.png", "36 unidades", 5.00),
new Produtos("Seda Bem Bolado Tradicional Large King Size", "imagens/produtos/sedas/bembolado_tradicional_large.png", "36 unidades", 4.00),
new Produtos("Seda Bem Bolado Brown Large King Size", "imagens/produtos/sedas/bembolado_brown_large.png", "36 unidades", 4.50)];

var filtros = [new Produtos("Papelito Tradicionais 6mm", "imagens/produtos/filtros/papelito_tradicional.jpg", "120 unidades", 7.90),
new Produtos("Papelito Slim 5.3mm", "imagens/produtos/filtros/papelito_slim.jpg", "120 unidades", 7.90),
new Produtos("Bem Bolado Pop De Acetato Clássico Slim 6mm", "imagens/produtos/filtros/bembolado_slim.jpg", "120 unidades", 9.90),
new Produtos("Bem Bolado Pop De Acetato Long Slim 6mm", "imagens/produtos/filtros/bembolado_longo.jpg", "100 unidades", 9.99)];

var acessorios = [new Produtos("Cinzeiro Redondo Pequeno de Vidro para Cigarro", "imagens/produtos/acessorios/cinzeiro.jpg", "1 unidade", 35.90),
new Produtos("Isqueiro Clipper Muerta Dogs", "imagens/produtos/acessorios/isqueiro.jpg", "1 unidade", 8.90),
new Produtos("Dichavador de Metal Extra Gold", "imagens/produtos/acessorios/dichavador.jpg", "3 partes", 39.90),
new Produtos("Bandeja para Bolar Na Boa Pequena", "imagens/produtos/acessorios/bandeja.jpg", "1 unidade", 19.90)];

function addCarrinho(i) {

    var j;

    switch(i) {
      case 0:
        kart.push(tabacos[i]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 1:
        kart.push(tabacos[i]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 2:
        kart.push(tabacos[i]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
        
      break;
      case 3:
        kart.push(tabacos[i]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 4:
        j = 0;
        kart.push(sedas[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 5:
        j = 1;
        kart.push(sedas[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 6:
        j = 2;
        kart.push(sedas[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 7:
        j = 3;
        kart.push(sedas[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 8:
        j = 0;
        kart.push(filtros[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 9:
        j = 1;
        kart.push(filtros[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 10:
        j = 2;
        kart.push(filtros[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 11:
        j = 3;
        kart.push(filtros[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 12:
        j = 0;
        kart.push(acessorios[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 13:
        j = 1;
        kart.push(acessorios[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 14:
        j = 2;
        kart.push(acessorios[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
      case 15:
        j = 3;
        kart.push(acessorios[j]);
        document.getElementsByClassName("product-button")[i].setAttribute('disabled','disabled');
      break;
    }
    alert("Item adicionado ao carrinho!");
    localStorage.setItem('carrinho', JSON.stringify(kart));
    console.log(kart);
}

function modalShow(i) {
    var modal = document.getElementsByClassName("modal")[i];
    var span = document.getElementsByClassName("close")[i];

    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}