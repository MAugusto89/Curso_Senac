var soma=0;
for (var cont= 1; cont <= 30; cont ++){
    var n=Number.parseInt(window.prompt('Digite o número: '))
    if (n % 5 == 0) {
        soma += n
    }
}
document.write(`A soma dos números divisiveis por 5 é: ${soma}`)

/*var soma=0;
for (var cont= 1; cont <= 30; cont ++){
   var n=Number(window.prompt('Digite o número: '))
   if (n % 5 == 0) {
      soma= n+soma
   }
}
document.write(`Os multiplos de 5 somam: ${soma}`)
*/

