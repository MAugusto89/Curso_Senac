var soma = 0;
var cont = 0;
var n = 0;
var impar = 0;
while (n != -999) {
    n = Number(window.prompt('Digite o número:  Tecle -999 para encerar o sistema'))
    if (n != -999) {
        soma += n
        cont += 1
    }
    if (n % 2 == 1) {
        impar += 1
    }
}
document.write(`A quantidade dos números digitados foi ${cont} e a soma deles é ${soma} e a quantidade de números ímpares digitados foi ${impar}`)