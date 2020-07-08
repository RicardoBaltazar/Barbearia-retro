sessionStorage.clear();

var divHair = document.querySelector('#div-hair')
var divBeard = document.querySelector('#div-beard')

divHair.addEventListener('click', function(){
    divHair.classList.toggle('selected')

    if(divHair.classList === 'selected'){
        sessionStorage.setItem('Cabelo', 'Cabelo')
    } else {
        sessionStorage.setItem('Cabelo', '')
    }
})

divBeard.addEventListener('click', function(){
    divBeard.classList.toggle('selected')

    if(divHair.classList = 'selected'){
        sessionStorage.setItem('Barba', 'Barba')
    } else {
        sessionStorage.setItem('Barba', '')
    }
})
