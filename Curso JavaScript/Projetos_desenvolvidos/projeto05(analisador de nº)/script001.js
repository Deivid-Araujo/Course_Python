/* OBSERVAÇÕES
ALERTAS:
se o valor NÃO estiver entre 1 e 100 = alert('Valor inválido ou já está na lista)
se a caixa de valor estiver vazia = alert('Valor inválido ou já está na lista)
se o valor já estiver lá = alert('Valor inválido ou já está na lista)
se não tiver valor antes de finalizar = alert('Adicione valores antes de finalizar')
AÇÕES:
clicando em adicionar = adiciona o seguinte na section ('Valor x adicionado) fazendo dnv coloca o mesmo texto embaixo
clicando em finalizar = aparecerá a seguinte sequencia a baixo de tudo
                        ao todo temos x números cadastrados
                        o maior valor informado é y
                        o menor valor informado é z
                        somando todos os valores, temos a 
                        a média dos valores digitados é b 
se um novo valor for adicionado, apagara o testo escrito e acumulara na section
*/
//criar funções para cada caso diferente, não só uma
//como deixar um espaço no selet reservado
var num = document.getElementById('txtnum')
var tabela = document.getElementById('tabela')
var res = document.getElementById('res')
var valores = []

function IsNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function InList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }    
}

function adicionar(){
    if (IsNumber(num.value) && !InList(num.value,valores)){
        valores.push(Number(num.value))
        var linha = document.createElement('option')
        linha.text = `Valor ${Number(num.value)} adicionado.`
        tabela.appendChild(linha)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já está na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    var tamanho = valores.length
    var menor = valores[0]
    var maior = valores[0]
    var soma = 0
    var media = 0
    if(tamanho == 0){
        alert('Adicione números antes de finalizar!')
    }
    else{
        for (var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos]< menor){
                menor = valores[pos]
            } 
        }
        media = soma/tamanho
        res.innerHTML +=`<p>O total é de ${tamanho} números.</p>`
        res.innerHTML += `<p>O menor é ${menor}.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>A soma é : ${soma}.</p`
        res.innerHTML += `<p>A média é: ${media}.</p>`
    }    
}
function voltar(){
    valores = []
    tabela.innerHTML = ''
    res.innerHTML = ''
    num.focus()   
}