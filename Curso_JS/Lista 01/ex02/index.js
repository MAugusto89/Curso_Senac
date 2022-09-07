var nome = window.prompt('Qual seu Nome: ')
var idade = Number.parseInt(window.prompt('Digite sua Idade: '))
if (idade>=0 && idade<=2) {
    document.write('<h2>Seu nome é '+ nome +' está com '+ idade +' anos e pela tabela você é considerado um Bebê</h2>')
}else if(idade>=3 && idade<=11){
    document.write('<h2>Seu nome é '+ nome +' está com '+ idade +' anos e pela tabela você é considerado um Criança.<h2>')
}else if(idade>=12 && idade<=21){
    document.write('<h2>Seu nome é '+ nome +' está com '+ idade +' anos e pela tabela você é considerado um Adolescente.<h2>')
}else if(idade>=22 && idade<=64){
    document.write('<h2>Seu nome é '+ nome +' está com '+ idade +' anos e pela tabela você é considerado um Adulto.<h2>')
}else if(idade>=65 && idade<=100){
    document.write('<h2>Seu nome é '+ nome +' está com '+ idade +' anos e pela tabela você é considerado um Idoso.<h2>')
}else if(idade>=101){
    document.write('<h2>Seu nome é '+ nome +' está com '+ idade +' anos e pela tabela você é considerado Muito Velhinho, CUIDADO !<h2>')
}