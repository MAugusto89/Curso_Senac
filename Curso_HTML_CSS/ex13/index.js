function pedido() {
    var pedido_lanche = parseInt(prompt("Digite o código do seu lanche: "))
    var qtd_lanche = parseInt(prompt("Digite a quatidade de lanches desejados: "))
    var pedido_bebida = parseInt(prompt("Digite o código de bebida: "))
    var qtd_bebida = parseInt(prompt("Digite a quantidade de bebidas desejadas:"))
    switch (pedido_lanche) {
        case 100:
            nome = "Cachorro Quente"
            v_lanche=4.5;
            total_lanche = qtd_lanche * v_lanche;
        break

        case 101:
            nome = "Bauru Simples"
            v_lanche = 5.3;
            total_lanche = qtd_lanche * v_lanche;
        break
        
        case 102:
            nome = "Bauru Com Ovo"
            v_lanche = 5.50;
            total_lanche = qtd_lanche * v_lanche;
        break

        case 103:
            nome = "Hambuguer"
            v_lanche = 6.2;
            total_lanche = qtd_lanche * v_lanche;
        break
    }
    switch (pedido_bebida) {
        case 201:
            nomeBebida = "Refrigerante"
            vBebida = 3;
            totalBebida = qtd_bebida * vBebida;
        break
        case 202:
            nomeBebida = "Suco"
            vBebida = 4.5;
            totalBebida = qtd_bebida * vBebida;
        break
        case 203:
            nomeBebida = "Água Mineral"
            vBebida = 2.7;
            totalBebida = qtd_bebida * vBebida;
        break
    } 

    var total_pedido =  total_lanche + totalBebida;
    alert(`O valor total do pedido R$ ${total_pedido}`)

    alert('Pedido realizado com Sucesso.') 
}