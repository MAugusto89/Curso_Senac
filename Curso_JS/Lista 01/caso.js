document.write('<br> Exmplo utilizando o Switch Case')

var cor = window.prompt('Digite a cor do semáforo: ')

switch (cor) {
    case 'verde':
        document.write('<br><br> SIGA EM FRENTE')
        break;
    case 'amarelo':
        document.write('<br><br> ATENÇÃO !')
        break;
    case 'vermelho':
        document.write('<br><br> PARE !!!')
        break;
    default:
        document.write('<br><br> Essa cor não existe')
        break;
}