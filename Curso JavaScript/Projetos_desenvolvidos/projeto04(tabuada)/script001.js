//chamada da função gerar
function gerar(){
    //atribuição de objeto a variavel, transformando em String
    var numero = document.getElementById('txtnum')
    var numerov = numero.value
    var numeros = String(numerov)
    var tabuada = document.getElementById('tabuada')
    //condição se a caixa de texto tiver vazia
    if (numeros.length == 0){
        alert('verifique o dados')
    } else { 
        //condição real, criação da variavel 'c' e texto da tabuada vazio 
        var c = 1
        tabuada.innerHTML = ''
        //laço até o número 10
        while(c <= 10){
            //criação de option: um elemento dentro do outro
            var linha = document.createElement('option')
            //escrevendo dentro da variavel
            linha.innerText = `${numerov} X ${c} = ${numerov*c}`
            //adição de conteúdo sempre ao ultimo
            tabuada.appendChild(linha)
            //incremento de 'c' até chegar ao 10
            c++    
        }
        
    }
}