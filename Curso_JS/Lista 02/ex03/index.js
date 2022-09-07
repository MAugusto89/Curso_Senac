var maior = 0;
for (var cont= 1; cont <= 10; cont ++){
    var n=window.prompt('Digite o número: ')
    document.write(`${n} ,` )
    if (n > maior) {
       maior = n;
    }
}
document.write(`O maior número é: ${maior}`)