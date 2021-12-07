// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {
    nome = document.querySelectorAll('input[type="text"]')[0]
    carac = document.querySelectorAll('input[type="text"]')[1]
    data = document.querySelectorAll('input[type="text"]')[2]
    time = document.querySelectorAll('input[type="text"]')[3]

    botao = document.querySelector('.icon_60')
    botao.addEventListener('click', function(event){
        console.log(nome.value)
    })
})