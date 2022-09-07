function reservas() {
    var r_Ap = parseInt(prompt("Digite o código do Apartamento que deseja: "))
    var qtd_Pessoa = parseInt(prompt("Digite a quatidade de hóspedes: "))
    switch (r_Ap) {
        case 1:
            nome = "Apartamento Simples"
            v_Ap = 150;
            total_Ap = qtd_Pessoa * v_Ap;
        break

        case 2:
            nome = "Apartamento Duplo"
            v_Ap = 280;
            total_Ap = qtd_Pessoa * v_Ap;
        break
        
        case 3:
            nome = "Apartamento Premium"
            v_Ap = 580;
            total_Ap = qtd_Pessoa * v_Ap;
        break
    } 
    alert(`O valor total de sua Reserva é de R$ ${total_Ap}`)

    alert('Reserva realizada com Sucesso.') 
}