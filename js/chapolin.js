$(document).ready(function() {

	var chapolin = [
		'Quem era ele? Era o Super San. O que é isso? É uma espécie de Chapolin Colorado mas com conta bancária.',
		'Vai me dizer que acredita em bruxas? Mas é claro que não, mas que elas existem, existem.',
		'Chapolin, por que você está desamarrando a corda de olhos fechados? Porque deram um nó cego!',
		'Se me deixom vou trabalheixon, vou botar o saqueixon no caminhoneixon.',
		'Sei que você sempre saiu na rua com essa cara, o que demonstra uma coisa... você é muito valente!',
		'Não poderei comemorar meu aniversário em setembro este ano. Por que? Porque nasci em março.',
		'Ele rico, eu pobre. Ele era inquieto, eu tranquilo. Ele era preguiçoso, eu estudioso. Eu era Pacífico, ele Atlântico.',
		'Não contavam com minha astúcia!',
		'Ou você me entrega esse retrato às seis da tarde, ou às seis e cinco você vai estar mais morto que a múmia de Tutancamon.',
		'Uma coisa eu digo, ou daqui saímos todos ou só eu. Quero dizer, ou saímos todos ou ninguém.',
		'Para entender o francês necessito de três coisas: que falem devagar, em voz alta e em português.',
		'Corram! Ele está vindo aí! Mulheres e Chapolins primeiros.',
		'Já diz o ditado: é melhor uma mulher nova, bonita e rica, do que uma velha, feia e pobre.'
	];

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
