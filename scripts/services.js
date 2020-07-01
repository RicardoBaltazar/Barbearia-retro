let divHair = document.querySelector('#div-hair')
let divBeard = document.querySelector('#div-beard')



divHair.addEventListener('click', function(){
    divHair.classList.toggle('selected')
})

divBeard.addEventListener('click', function(){
    divBeard.classList.toggle('selected')
})

console.log(choise[0])