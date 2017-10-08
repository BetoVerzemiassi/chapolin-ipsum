$(document).ready(function() {

	var chapolin = new Array();
	chapolin[0] = "Quem era ele? Era o Super San. O que é isso? É uma espécie de Chapolin Colorado mas com conta bancária.";
	chapolin[1] = "Vai me dizer que acredita em bruxas? Mas é claro que não, mas que elas existem, existem.";
	chapolin[2] = "Chapolin, por que você está desamarrando a corda de olhos fechados? Porque deram um nó cego!";
	chapolin[3] = "Se me deixom vou trabalheixon, vou botar o saqueixon no caminhoneixon.";
	chapolin[4] = "Sei que você sempre saiu na rua com essa cara, o que demonstra uma coisa... você é muito valente!";
	chapolin[5] = "Não poderei comemorar meu aniversário em setembro este ano. Por que? Porque nasci em março.";
	chapolin[6] = "Ele rico, eu pobre. Ele era inquieto, eu tranquilo. Ele era preguiçoso, eu estudioso. Eu era Pacífico, ele Atlântico.";
	chapolin[7] = "Não contavam com minha astúcia!";

	function geraFraseAleatoria(array){
		var fraseAleatoria = chapolin[Math.floor(Math.random() * chapolin.length)];
		return fraseAleatoria;
	}

	$('.gerar_chapolin').click(function(){
		var quantidade = $('.quantidade-frases.active').data('quantidade');
		var frases = "";
		for(i = 0; i < quantidade; i++) {
			frases +="\t"+geraFraseAleatoria()+"\n";
		}
		$('.texto-chapolin').val(frases);
		copyToClipboard($('.chapolin').val());
	});

	$('.quantidade-frases').click(function() {
		$('.quantidade-frases').removeClass('active');
		$(this).addClass('active');
	});

	function copyToClipboard(value) {
		var aux = document.createElement("input");
		aux.setAttribute("value", value);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
	}
});
