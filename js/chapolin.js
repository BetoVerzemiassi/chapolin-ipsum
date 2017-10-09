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
	chapolin[8] = "Ou você me entrega esse retrato às seis da tarde, ou às seis e cinco você vai estar mais morto que a múmia de Tutancamon.";
	chapolin[9] = "Uma coisa eu digo, ou daqui saímos todos ou só eu. Quero dizer, ou saímos todos ou ninguém.";
	chapolin[10] = "Para entender o francês necessito de três coisas: que falem devagar, em voz alta e em português.";
	chapolin[11] = "Corram! Ele está vindo aí! Mulheres e Chapolins primeiros.";
	chapolin[12] = "Já diz o ditado: é melhor uma mulher nova, bonita e rica, do que uma velha, feia e pobre.";

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
