var soma=0;
for (var cont= 1; cont <= 10; cont ++){
   var n=Number(window.prompt('Digite o número: '))
   if (n % 2 == 1) {
      soma= n+soma
   }
}
document.write(`A soma dos números ímpares são: ${soma}`)