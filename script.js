var tentativas = 5;
var pontos = 0;
var numeroSecreto = parseInt(Math.random()*10);	
	
function adivinha(){
	let valorDigitado = parseInt(document.querySelector('#valor').value)
	
	if(valorDigitado === numeroSecreto){
		document.querySelector('.descricao').textContent = "Você acertou!! Tente acertar novamente!";
		
		numeroSecreto = parseInt(Math.random()*10);
		pontos = pontos + 50;
		tentativas++
		
		document.querySelector('.pontos').textContent = "Seus pontos: " + pontos
		document.querySelector('.tentativas').textContent = "Vidas: " + tentativas;
	}else if(valorDigitado < numeroSecreto){
		document.querySelector('.descricao').textContent = "Você errou! Tente um numero maior.";
		tentativas--;
		if(pontos <= 0){
			pontos= 0;
		}else if(pontos > 0){
			pontos = pontos - 20
			if(pontos < 0){
				pontos = 0
			}
		}
		document.querySelector('.tentativas').textContent = "Vidas: " + tentativas;
		document.querySelector('.pontos').textContent = "Seus pontos: " + pontos;
	}else if(valorDigitado > numeroSecreto){
		document.querySelector('.descricao').textContent = "Você errou! Tente um numero menor.";
		tentativas--;
		if(pontos <= 0){
			pontos= 0;
		}else if(pontos > 0){
			pontos = pontos - 20
			if(pontos < 0){
				pontos = 0
			}
		}
		document.querySelector('.tentativas').textContent = "Vidas: " + tentativas;
		document.querySelector('.pontos').textContent = "Seus pontos: " + pontos;
	}
	if( tentativas == 0){
		document.querySelector('.descricao').textContent = "Infelizmente você perdeu, tente novamente.";
		document.getElementById('botao').disabled = true;
		document.getElementById('botaoRestart').hidden = false;
		document.querySelector('.explicacao').textContent = ""
	}
}

function restart(){
	document.getElementById('botao').disabled = false;
	document.getElementById('botaoRestart').hidden = true;
	
	tentativas = 5;
	pontos = 0;
	
	document.querySelector('.pontos').textContent = "Seus pontos: " + pontos
	document.querySelector('.tentativas').textContent = "Vidas: " + tentativas;
	document.querySelector('.descricao').textContent = "Digite um numero de 0 a 10";
	document.querySelector('.explicacao').textContent = "Faça o maior numero de pontos possíveis"
	document.getElementById('valor').value = ""
}