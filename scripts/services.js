sessionStorage.clear();

var divHair = document.querySelector('#div-hair')
var divBeard = document.querySelector('#div-beard')

divHair.addEventListener('click', function(){
    divHair.classList.toggle('selected')
    sessionStorage.setItem('Cabelo', 'Cabelo')
})

divBeard.addEventListener('click', function(){
    divBeard.classList.toggle('selected')
    sessionStorage.setItem('Barba', 'Barba')
})
