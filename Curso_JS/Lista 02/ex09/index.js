var cont = 0;
while (n != 0) {
    var n = Number(window.prompt('Digite o número: Tecle 0 para encerar o sistema'))
    if (n != 0){
        if (n == 50) {
            cont ++   
        }
    }
}
document.write(`A quantidade de número 50 digitado foi ${cont}`)