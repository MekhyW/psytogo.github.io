/// Definindo Lista
let Lista = Array.from(window.location.href.split("/"))
//console.log(lista.at(-1))

if ((Lista[Lista.length -1]) === "Pacientes.html"){
    paciente = document.getElementById("boneco")
    paciente2 = document.getElementById("boneco2")
    paciente3 = document.getElementById("boneco3")
    paciente4 = document.getElementById("boneco4")
    paciente5 = document.getElementById("boneco5")
    paciente.remove()
    paciente2.remove()
    paciente3.remove()
    paciente4.remove()
    paciente5.remove()
    /// Uma vez que não existem pacientes
    index = 0
    boneco = 6
    sessionStorage.setItem("boneco", boneco)
    
    lista = sessionStorage.getItem("nome")
    Texto = document.getElementById("text_pacientes")     
    if(lista === null){      
        Texto.textContent = "Agenda Vazia"
    }else{
       "Texto.textContent = Pacientes do dia:"
    }
}

if (Lista[Lista.length -1] === "Adicionar.html"){
    document.addEventListener("DOMContentLoaded", function() {
        
        botao = document.getElementById("botao_ok")

        botao.addEventListener("click", function(event){
            // Conteudo da Mensagem
            //event.preventDefault()
            txtInput = document.getElementById("Nome_paciente").value
            lista = sessionStorage.getItem("nome")
           
            if(lista === null){
                sessionStorage.setItem('nome',txtInput+",")
            }
            else{
                lista = lista.split(",")
                lista.push(txtInput)
                sessionStorage.setItem('nome',lista.join(","))
            }
            
        })
    })
}

if ((Lista[Lista.length -1]) === "Pacientes.html"){

    if(sessionStorage.getItem("nome")=== null){
        console.log("Não Existem Nomes no SessionStorage")
    } else{
    /// Adiciona Nome colocado na Lista
    main = document.getElementById("lista_pacientes")

    // Criando Estruta de Lista Paciente
    nome_pacientes = sessionStorage.getItem("nome").split(",")
    for(nome_paciente of nome_pacientes){
        if(nome_paciente != ""){
            a = document.createElement("a")
            a.setAttribute("class", "linha alinhador")
            a.setAttribute("id", "boneco_add")
            a.setAttribute("href", "Status.html")

            img = document.createElement("img")
            img.setAttribute("src", "../img/Paciente.png")
            img.setAttribute("alt", "Status do paciente.html")

            h3 = document.createElement("h3")
            h3.setAttribute("class", "list_text_big.html")
            h3.innerHTML = nome_paciente

            a.appendChild(img)
            a.appendChild(h3)

            main.appendChild(a)
        }
        

    }
    
    // sessionStorage.clear()
    }
}