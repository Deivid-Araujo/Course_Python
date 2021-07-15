//determinar horas e minutos do sistema
var data = new Date
var horas = data.getHours()
var minutos = data.getMinutes()
//atribuir objetos a variáveis
var txthoras = document.querySelector('div#horas')
var res = document.querySelector('div#res')
var foto = document.querySelector('div#foto')
//criação do objeto imagem e colocando div nela
var imagem = document.createElement('img')
imagem.setAttribute('id', 'foto')
//condições para cumprimento, foto e fundo de  acordo com as horas
if (horas >= 6 && horas <= 12){
    txthoras.innerHTML = 'Bom dia!!'
    imagem.setAttribute('src', 'fotodia.png')    //escolha de imagem específica
    document.body.style.backgroundColor = 'gold' //determinação do fundo do doc
} else if (horas >= 12 && horas <= 18){
    txthoras.innerHTML = 'Boa tarde!'
    imagem.setAttribute('src', 'fototarde.png')
    document.body.style.backgroundColor = 'dodgerblue'
} else if (horas >= 18 && horas <= 23){
    txthoras.innerHTML = 'Boa noite!'
    imagem.setAttribute('src', 'fotonoite.png')
    document.body.style.backgroundColor = 'maroon'
} else {
    txthoras.innerHTML = 'Boa madrugada!'
    imagem.setAttribute('src', 'fotonoite.png')
    document.body.style.backgroundColor = 'darkgrey'
}
//centralização de tudo
txthoras.style.textAlign = `center`
res.style.textAlign = `center`
foto.style.textAlign = 'center'
//texto mostrado na variavel 'res'
res.innerHTML = `Agora são exatamente ${horas}:${minutos}!`
//anexo da imagem
foto.appendChild(imagem)
