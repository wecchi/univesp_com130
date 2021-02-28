function soma(){ 
	var numero1 = 2; 
	var numero2 = 5; 
	var soma = 0; 
	soma = numero1 + numero2; 
	return soma; 
}

function mostraSituacao(media){ 
	if(media >= 7){
		alert("Aprovado"); 
	} 
	else{ 
		alert("Reprovado"); 
	}
}

function verificaFrete(valor){
	if (valor >= 100){
		return 0;
	}
	else {
		return valor * 0.1
	}
}

function calculaValorLaptop(quantidade){
	var total = 0;
	if (quantidade <= 5) {
		alert("Valor total = R$" + quantidade * 1200)
	}
	else {
		alert ("Valor total = R$" + quantidade * 1050)
	}
}

function confirma(){ 
	resposta = confirm("Confirma a inserção da ordem?"); 
    if(resposta==1){ 
    	return true;} 
    else {
    	return false}
}

function entrada(){
	nome = prompt("Digite seu nome:"); 
    return nome;
}

function perguntaEndereco(){ 
	do {
    	endereco = prompt("Insira o seu endereço:"); 
        confirma = confirm("Seu endereço é: " + endereco); 
        } while(!confirma); 
        alert("A página será alterada..."); 
        document.write("Seu endereço é "+endereco+"."); 
}

function maiuscula(texto){
	texto.value = texto.value.toUpperCase(); 
}

function habilitarCampo(opcao){
	if(opcao){
		document.formulario.adicionais.disabled = false;
	}
	else{
		document.formulario.adicionais.disabled = true;
	}
	document.formulario.adicionais.value = "";
}

function calculaIMC(){ 
	peso = parseFloat(document.imc.peso.value); 
	altura = parseFloat(document.imc.altura.value); 
	resultado = peso/(altura*altura); 
	resultado = resultado.toFixed(2); 
	alert("Seu IMC é: "+resultado); 
}

function valida(){
	if(document.formBusca.busca.value == ""){
		alert("Preencha o campo PROCURAR corretamente");
		document.formBusca.busca.focus();
		return false;
	}
	if(document.formBusca.busca.value.length < 3){
		alert("Informe ao menos 3 letras no campo PROCURAR");
		document.formBusca.busca.focus();
		return false;		
	}
	return true;
}

function validaData(){
	var x = document.forms["formData"]["data"].value
	if ( x  == "" || x.length != 10){
		alert("Preencher o campo DATA corretamente");
		document.forms["formData"]["data"].focus();
		return false;
	}
	expReg = /^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0 [13578]|1[02]))\/\d{4}$/;
	if (x.match(expReg) && x != ''){ 
		alert("Data válida"); 
		return true;
	} 
	else{ 
		alert("Formato inválido de data"); 
		document.forms["formData"]["data"].focus(); 
	return false; 
	}
}