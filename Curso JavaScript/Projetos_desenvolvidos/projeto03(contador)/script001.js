function verificar(){
    //atribuindo objetos a variaveis, passando para variaveis com valores e string tbm
    var inici = document.getElementById('start')
    var fi = document.getElementById('end')
    var pass = document.getElementById('pass')
    var res = document.querySelector('div#res')
    var inicio = inici.value
    var fim = fi.value
    var passo = pass.value
    var inicios = String(inicio)
    var fims = String(fim)
    var passos = String(passo)
    //condição se não tiver nada nos inputs
    if (inicios.length == 0 || fims.length == 0 || passos.length ==0){
        alert('Verifique os dados')
    } else {
        //dando valores de nºs e colocando texto em 'res'
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)
        res.innerHTML = 'Contando: <br>'
        //condição de inicio maior que fim e vice-versa
        if (i <= f){
            //laço for para aumentar um nº por vez
            for (var c = i; c <= f; c += p){
                //colocando nºs e emojis em 'res'
                res.innerHTML += `${c} 	\u{2708} `
            }
        } else {
            for(var c = i; c >= f; c -=p)
            res.innerHTML += `${c} \u{2708}`
        }  
        //emoji em 'res'
        res.innerHTML += `\u{1F0CF}`  
    }
}