var soma = 0;
var cont = 0;
var n = 0;
while (n != -1) {
    n = Number(window.prompt('Digite o número:  Tecle -1 para encerar o sistema'))
    if (n != -1) {
        soma += n
        cont += 1
    }
}
document.write(`A quantidade dos números digitados foi ${cont} e a soma deles é ${soma}`)
