let divHair = document.querySelector('#div-hair')
let divBeard = document.querySelector('#div-beard')

let valueHair = 20
let valueBeard = 15

let totalValue = 0

divHair.addEventListener('click', function(){
    divHair.classList.toggle('selected')
})

divBeard.addEventListener('click', function(){
    divBeard.classList.toggle('selected')
})