var sexo, alturaFem, alturaMas, altura
var maior = 0;
var menor = 0;
var cont = 0;
var somaF = 0;
var somaM = 0;

for(var cont = 0; cont < 3; cont ++){
    sexo = window.prompt('Digite F para feminino ou M para Masculino')
    if (sexo =='F') {
        var alturaFem = Number.parseFloat(window.prompt('Digite sua altura'))
        if (alturaFem > maior) {
            maior = alturaFem;
        }else{
            menor = alturaFem;
        }
        somaF += alturaFem
        cont += 1
    }
    if (sexo == 'M') {
        var alturaMas = Number.parseFloat(window.prompt('Digite sua altura'))
        somaM += alturaMas;
    }
}
document.write(`A maior altura das mulheres é: ${maior}`)
document.write(`A menor altura das mulheres é: ${menor}`)
document.write(`A média de altura das mulheres é ${somaF/cont}`)
document.write(`A média de altura da turma é ${(somaF + somaM) / 10}`)