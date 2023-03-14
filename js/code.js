//elemento fechar
//var btFechar = document.getElementById('btFechar')
var btFechar = document.querySelector('.popup .fechar')

//Evento clique ou evento fechar
btFechar.addEventListener('click', ()=>{
    //alteração de CSS em tempo real
    document.getElementById('oferta').style.display = 'none' 
})

// var num = 12
// var raiz = Math.sqrt(num)

// console.log(raiz)
// console.log(Math.round(raiz))
// console.log(Number(raiz.toFixed(2)) + 4)
