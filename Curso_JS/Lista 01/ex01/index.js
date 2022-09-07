var n1 = Number.parseInt(window.prompt('Digite um número: '))
var n2 = Number.parseInt(window.prompt('Digite outro número: '))
var soma = n1 + n2

if (soma > 10 ) {
    document.write('O resultado da soma é '+soma+' e é Maior que 10 !')
}
if (soma < 10 ) {
    document.write('O resultado da soma é '+soma+' e é Menor que 10 !')
}
if (soma == 10 ) {
    document.write('O resultado da soma é '+soma+' e é Igual que 10 !')
}
