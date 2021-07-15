let valores = [0, 5, 4, 9]
//valores[4] = 26 //adiciona valor em espaço determinado no array
valores.push(4) //adiciona último valor no array
valores.sort()  //deixa em ordem crescente
/*for (let c = 0; c < valores.length; ++c){
    console.log(`A posição ${c} é igual a ${valores[c]}`)       
}                       
*/
//FORMA SIMPLIFICADA DO ACIMA
for(let c in valores){
    console.log(`A posição ${c} é ${valores[c]}`)
}
console.log(`A posição 4 é igual a ${valores[4]}`)
console.log(valores) // sem template aparece conchetes
console.log(`O array é o seguinte: ${valores}`) //Template string não aparece conchetes
console.log(`O tamanho do array é de ${valores.length} posições`) // mostra o tamanho de um array
console.log(`O valor 5 se encontra na posição: ${valores.indexOf(5)}`) //encontra posição de determinado valor
console.log(`O valor inexistente se encontra na posição: ${valores.indexOf(7)}`) //Se o valor não existir, a posição será -1