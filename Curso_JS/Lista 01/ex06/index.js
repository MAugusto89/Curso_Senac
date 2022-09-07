var n1 = Number.parseInt(window.prompt('Digite um número: '))
var n2 = Number.parseInt(window.prompt('Digite outro número: '))
var soma = n1 + n2
document.write('O resultado da soma dos números digitados é: ' + soma + '</br>')
if (soma % 2 == 0) {
    document.write('O Número '+soma+' é Par.')
}else{
    document.write('O Número '+soma+' é Ímpar.')
}