var cor = window.prompt('Digite a cor do semáforo: ')

if (cor == 'verde') {
    document.write('SIGA EM FRENTE !!')
}else if (cor == 'amarelo') {
    document.write('ATENÇÃO !!')
}else if (cor == 'vermelho') {
    document.write('PARE !!')
}else{
    document.write('Essa cor não existe.')
}