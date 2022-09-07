var d = Number.parseFloat(window.prompt('Qual a distância até o destino em KM: '))
var c = Number.parseFloat(window.prompt('Quantos KM seu veículo percorre por litro: '))
var calc = d / c
var g = calc*6.18

document.write('O custo de litros necessários para a viagem é de: '+calc+' L e o preço estimado é de R$'+g)