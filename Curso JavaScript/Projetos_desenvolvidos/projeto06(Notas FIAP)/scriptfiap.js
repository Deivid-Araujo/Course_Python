var checkpoint1s1 = document.getElementById('cp1s1')
var checkpoint2s1 = document.getElementById('cp2s1')
var checkpoint3s1 = document.getElementById('cp3s1')
var checkpoint4s1 = document.getElementById('cp4s1') 
var gsolution1 = document.getElementById('gsolution1')
var checkpoint1s2 = document.getElementById('cp1s2')
var checkpoint2s2 = document.getElementById('cp2s2')
var checkpoint3s2 = document.getElementById('cp3s2')
var checkpoint4s2 = document.getElementById('cp4s2')
var gsolution2 = document.getElementById('gsolution2')
var notaf1 = document.getElementById('notaf1')
var notaf2 = document.getElementById('notaf2')

var res1 = document.querySelector('div#res1') 
var res2 = document.querySelector('div#res2')
var res3 = document.querySelector('div#res3')

function calcular01() {
    var cp1s1s = String(checkpoint1s1.value)
    var cp2s1s = String(checkpoint2s1.value)
    var cp3s1s = String(checkpoint3s1.value)
    var cp4s1s = String(checkpoint4s1.value)
    var gs1s = String(gsolution1.value)

    var cp1s1 = Number(checkpoint1s1.value)
    var cp2s1 = Number(checkpoint2s1.value)
    var cp3s1 = Number(checkpoint3s1.value)
    var cp4s1 = Number(checkpoint4s1.value)
    var gs1 = Number(gsolution1.value)

    if(cp1s1s.length == 0 ||cp2s1s.length == 0 ||cp3s1s.length == 0 ||cp4s1s.length == 0){
        alert('[ERRO] Verifique as informações!')
    }else if(gs1s.length == 0){
        function somae01(c01,c02,c03,c04){
            somae1 = 6.0 - ((c01+c02+c03+c04)/4.0)*0.4 
            return somae1
        }
        somae1 = somae01(cp1s1,cp2s1,cp3s1,cp4s1)
        resultado = somae1/0.6
        res1.innerHTML = `Você precisa tirar <strong>${resultado.toFixed(2)}</strong> na Global Solution para passar.`
    }else{
        function soma(c1,c2,c3,c4,gs){
            soma01 = ((c1+c2+c3+c4)/4)*0.4 + gs*0.6
            return soma01
        }
        soma1 = soma(cp1s1,cp2s1,cp3s1,cp4s1,gs1)
        res1.innerHTML = `Nota do trimestre: <strong>${soma1}.</strong>`
    } 
}

function calcular02(){
    var cp1s2s = String(checkpoint1s2.value)
    var cp2s2s = String(checkpoint2s2.value)
    var cp3s2s = String(checkpoint3s2.value)
    var cp4s2s = String(checkpoint4s2.value)
    var gs2s = String(gsolution2.value)

    var cp1s2 = Number(checkpoint1s2.value)
    var cp2s2 = Number(checkpoint2s2.value)
    var cp3s2 = Number(checkpoint3s2.value)
    var cp4s2 = Number(checkpoint4s2.value)
    var gs2 = Number(gsolution2.value)

    if(cp1s2s.length == 0 ||cp2s2s.length == 0 || cp3s2s.length == 0|| cp4s2s.length ==0){
        alert('[ERRO] Verifique as informações')
    } else if (gs2s.length == 0){
        function somae02(c001,c002,c003,c004){
            somae2 = 6 - ((c001+c002+c003+c004)/4)*0.4
            return somae2
        } 
        somae2 = somae02(cp1s2,cp2s2,cp3s2,cp4s2)
        resultado2 = somae2/0.6
        res2.innerHTML = `Você precisa tirar <strong>${resultado2.toFixed(2)}</strong> na Global Solution para passar.`
    } else {
        function soma2(cx1,cx2,cx3,cx4,gsx5){
            somax2 = ((cx1+cx2+cx3+cx4)/4)*0.4 + gsx5*0.6
            return somax2
        }
        somax2 = soma2(cp1s2,cp2s2,cp3s2,cp4s2,gs2)
        res2.innerHTML = `Nota do trimestre: <strong>${somax2}</strong>.`
    }
}

function resultado(){
    var notaf1n = Number(notaf1.value)
    var notaf2n = Number(notaf2.value)
    var notaf1s = String(notaf1.value)
    var notaf2s = String(notaf2.value)
    if(notaf1s.length == 0 && notaf2s.length == 0){
        alert('[ERRO] não deixe espaços em branco!')
    } else if (notaf1s.length != 0 && notaf2s.length == 0){
        falt = 6 - (notaf1n*0.4)
        falta = falt/0.6 
        res3.innerHTML = `Sua média atual é: <strong>${notaf1n*0.4}</strong> </br>`
        res3.innerHTML += `Para ficar na média, você precisar fechar o próximo semestre com: <strong>${falta.toFixed(2)}</strong>.`
    }  else {
        ma = (0.4*notaf1n + 0.6*notaf2n)
        res3.innerHTML = `Sua média é : <strong>${ma.toFixed(2)}</strong>`
    }
}