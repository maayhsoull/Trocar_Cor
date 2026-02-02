'use strict' // Ele impede erros comuns, como usar variáveis não declaradas, 
            // proíbe sintaxes mal projetadas e transforma erros silenciosos em exceções, 
            //resultando em um código mais seguro, limpo e performático. 

const botaoTrocarCor = document.getElementById('trocar-cor')


function trocarCor(){

    let cor = document.getElementById('cor').value

    if(cor == 'amarelo'){
        cor = "yellow"
    }else if(cor == 'vermelho'){
        cor = 'red'
    }else if(cor == 'azul'){
        cor = 'blue'
    }else if(cor == 'verde'){
        cor = 'green'
    }

    document.documentElement.style.setProperty('--cor-bg', cor)

}

botaoTrocarCor.addEventListener('click', trocarCor)


