var nC = window.prompt('Qual o número da sua conta: ')
var s = Number.parseFloat(window.prompt('Qual o saldo da sua conta: '))
var d = Number.parseFloat(window.prompt('Qual o valor de débito: '))
var c = Number.parseFloat(window.prompt('Qual o valor de crédito: '))

var sA = s - d + c;

document.write('Número da conta: '+nC+'<br>')

if (sA <= 0) {
    document.write('Seu saldo é Negativo, é de R$'+sA )
}else if (sA > 0) {
    document.write('Seu saldo é Positivo, é de R$'+sA )
}