function verificar() {

	var data = new Date()
	var ano  = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res  = document.getElementById('res')

	if (fano.value.length == 0 || fano.value > ano) {
		window.alert('[Erro], Virificar o ano digitado!')
	} else {
		
	}
	



}