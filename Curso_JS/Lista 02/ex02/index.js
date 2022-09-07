/*
    for(1º instrução, 2º instrução, 3º instrução)
    1º instrução: declara a variável contadora e 
*/
document.write('<br>Ordem crescente<br>')
for (var cont = 11; cont <= 101; cont  += 10){
    document.write(`${cont} <br>`)
}

document.write('<br>Ordem decrescente<br>')
for (var cont = 101; cont >= 11; cont  -= 10){
    document.write(`${cont} <br>`)
}