function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.getElementById('res')

 if (fano.value.length == 0 || fano.value > ano) {
	 window.alert('[Erro] Verifique os dados e tente novamente')
 } else {
  var fsex = document.getElementsByName('radsex')
  var idade = ano - (fano.value)
  var dog = idade*15.5-idade*4.5
  var genero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  //res.innerHTML = `Idade calculada de ${idade} anos`
 } if (fsex[0].checked) {
	 genero ="Pequeno"
	 if (idade >=0 && idade <1) {
		 //filhote
		 img.setAttribute('src', 'imagens/bebe_menino.jpg')
	 } else if (idade >= 1 && idade < 2) {
		 //jovem
		 img.setAttribute('src', 'imagens/menino.jpg')
		 
	 } else if (idade < 50) {
        //Adulto
		img.setAttribute('src', 'imagens/homem_adulto.jpg')
	 } else {
		 //idoso
		 img.setAttribute('src', 'imagens/velho.jpg')
	 }
 } else if (fsex[1].checked) {
	 genero = 'Mulher'
	 if (idade >=0 && idade < 10) {
		//criança
		img.setAttribute('src', 'imagens/bebe_menina.jpg')

	} else if (idade >= 10 && idade < 21) {
		//jovem
		img.setAttribute('src', 'imagens/menina.jpg')

	} else if (idade < 50) {
	   //Adulto
	   img.setAttribute('src', 'imagens/mulher_adulta.jpg')

	} else {
		//idoso
		img.setAttribute('src', 'imagens/velha.jpg')

	}
 }

 res.innerHTML = `Porte: ${genero} porte, <br>
 Idade Humana: ${idade} <br>
 Idade Canina: ${dog}`
 res.appendChild(img)

 


}