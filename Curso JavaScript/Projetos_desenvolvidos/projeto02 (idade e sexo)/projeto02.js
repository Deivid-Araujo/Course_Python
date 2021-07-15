//função quando apertar o botão
function verificar(){
    //determinar ano do sistema
    var data = new Date()
    var ano = data.getFullYear()
    //atribuir objetos a variaveis e transformando em string
    var txtano = document.querySelector('input#txtidade').value
    var txtanostr = String(txtano)
    var res = document.querySelector('div#res')
    var sexo = document.getElementsByName('opcao')
    var etnia = document.getElementsByName('etnia')
    //dando valores a variaveis
    var genero = ''
    var idade = ano - txtano
    var txtetnia = ''
    //criação de imagem e nomeando div
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    //condições gerais:
    if (txtanostr.length == 0 || txtano > ano){  //condição de erro para espaço em branco
        alert('Erro, verifique os dados!')
    }
    else{ 
    if(sexo[0].checked){                        //condição para opção selecionada
        var genero = 'homem'                    //dando valor a varivel vazia
        if (etnia[0].checked){                  //condição para opção de etnia selecionada
            var txtetnia = 'preta'
            if (idade <= 10){                   //condição em relação a idade
                imagem.setAttribute('src', 'boy_black_baby.png') //escolha específica da imagem
            } else if (idade <= 20){
                imagem.setAttribute('src', 'boy_black_teen.png')
            } else if (idade <= 50){
                imagem.setAttribute('src', 'boy_black_adult.png')
            } else {
                imagem.setAttribute('src', 'boy_black_old.png')
            }
        } else if (etnia[1].checked){
            var txtetnia = 'branca'
            if(idade <=10){
                imagem.setAttribute('src', 'boy_white_baby.png')
            } else if (idade <= 20){
                imagem.setAttribute('src', 'boy_white_teen.png')
            } else if(idade <= 50){
                imagem.setAttribute('src', 'boy_white_adult.png')
            } else {
                imagem.setAttribute('src', 'boy_white_old.png')
            }
        } else {
            var txtetnia = 'asiática'
            if(idade <=10){
                imagem.setAttribute('src', 'boy_asian_baby.png')
            } else if(idade <= 20){
                imagem.setAttribute('src', 'boy_asian_teen.png')
            } else if(idade <=50){
                imagem.setAttribute('src', 'boy_asian_adult.png')
            } else {
                imagem.setAttribute('src', 'boy_asian_old.png')
            }
        }
    } else {
        var genero = 'mulher'
        if(etnia[0].checked){
            var txtetnia = 'preta'
            if (idade <= 10){
                imagem.setAttribute('src', 'girl_black_baby.png')
            } else if (idade <=20){
                imagem.setAttribute('src', 'girl_black_teen.png')
            } else if (idade <= 50){
                imagem.setAttribute('src', 'girl_black_adult.png')
            } else{
                imagem.setAttribute('src', 'girl_black_old.png')
            }
        } else if(etnia[1].checked){
            var txtetnia = 'branca'
            if(idade <= 10){
                imagem.setAttribute('src', 'girl_white_baby.png')
            } else if (idade <= 20){
                imagem.setAttribute('src', 'girl_white_teen.png')
            } else if (idade <= 50){
                imagem.setAttribute('src', 'girl_white_adult.png')
            } else {
                imagem.setAttribute('src', 'girl_white_old.png')
            }
        } else{
            var txtetnia = 'asiática'
            if(idade <= 10){
                imagem.setAttribute('src', 'girl_asian_baby.png')
            } else if (idade <= 20){
                imagem.setAttribute('src', 'girl_asian_teen.png')
            } else if(idade <= 50){
                imagem.setAttribute('src', 'girl_asian_adult.png')
            } else{
                imagem.setAttribute('src', 'girl_asian_old.png')
            }
        }
}
    //centralização de texto, texto escrito e anexo da imagem
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} da etnia ${txtetnia} com ${idade} anos`
    res.appendChild(imagem)
}
}    
     