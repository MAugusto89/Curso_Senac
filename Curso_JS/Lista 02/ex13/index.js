var p = Number.parseFloat(window.prompt(''))
var h = Number.parseFloat(window.prompt('Qual é a sua altura: m2'))

var imc = p / (h * h)

if (imc < 18,5 ) {
    document.write('Seu IMC é ' +imc+'kg/m2 e Você está Abaixo do Seu Peso !')
}else if (imc > 18,5 &&  imc < 25) {
    document.write('Seu IMC é ' +imc+'kg/m2 e Você está com seu Peso Ideal !')
}else if (imc > 25 && imc < 30) {
    document.write('Seu IMC é ' +imc+'kg/m2 e Você está com Sobrepeso !')
}else if (imc > 30 && imc < 35) {
    document.write('Seu IMC é ' +imc+'kg/m2 e Você está com Obesidade Leve !')
}else if (imc > 35 && imc < 40) {
    document.write('Seu IMC é ' +imc+'kg/m2 e Você está com Obesidade Moderada !')
}else if (imc >= 40) {
    document.write('Seu IMC é ' +imc+'kg/m2 e Você está com Obesidade Mórbida !')
}