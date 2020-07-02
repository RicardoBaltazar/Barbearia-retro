var clientName = document.querySelector('#name')
var clientFone = document.querySelector('#fone')
var confirmName = document.querySelector('#confirmName')
var confirmFone = document.querySelector('#confirmFone')
var modal = document.querySelector('.modal')
var form = document.querySelector('form')
var confirmDates = document.querySelector('#confirmDates')
var buttonAgend = document.querySelector('#btnAgend')
var buttonConfirmDates = document.querySelector('#buttonConfirmDates')
var hour = ''


modal.style.display = 'none'
confirmDates.style.display = 'none'

//clicando no li
document.querySelector('#li9').addEventListener('click', function(){
    hour = '9 horas'
    console.log(hour)

    let li9 = document.querySelector('#li9')    
    li9.style.backgroundColor = 'grey'
    li9.innerHTML = 'reservado'

    modal.style.display = 'block'

})


//agendar
buttonAgend.addEventListener('click', function(){
    confirmDates.style.display = 'block'
    confirmName.innerHTML += clientName.value
    confirmFone.innerHTML += clientFone.value
})

//confirmar
buttonConfirmDates.addEventListener('click', function(){
    modal.style.display = 'none'
})

//close modal
var buttonCloseModal = document.querySelector('#btnCloseModal')
buttonCloseModal.addEventListener('click', function(){
    modal.style.display = 'none'

    li9.style.backgroundColor = 'white'
    li9.innerHTML = '9 horas'

}) 


/*
form.addEventListener('submit', function(e){
    e.preventDefault()
    
    var name = document.querySelector('#name')


    let body = {
        "Nome": name.value,
        "horario": hour,
        "telefone": '9556521'
    }
    
    fetch('http://localhost:8000/horario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log('Success: ', JSON.stringify(response))
        })
        .catch(error => console.error('Error:', error))

        modal.style.display = 'none'
})

*/

