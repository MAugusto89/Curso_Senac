var numero = Number.parseInt(window.prompt('Digite um número para ver a tabuada dele: '));
for (var cont = 0; cont <= 10; cont ++){
    document.write(`${numero} x ${cont} = ${numero * cont} <br>`)
}