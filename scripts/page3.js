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

var li = document.querySelector(".lists");
li.addEventListener("click", function (event) {
    console.log(event.target); // este é o elemento clicado
    console.log(event.target.id); // este é o id elemento clicado
    console.log(event.target.value) //este é o valor do elemento clicado

    hour = event.target.value
    event.target.classList.toggle('reserved') // o elemento clicado muda de classe
    //event.target.innerHTML = 'Reservado' // adicionando o texto 'reservado' no elemento clicado
    modal.style.display = 'block'

    buttonAgend.addEventListener('click', function () {


        let body = {
            "Nome": clientName.value,
            "horario": hour,
            "telefone": clientFone.value
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

    var buttonCloseModal = document.querySelector('#btnCloseModal')
    buttonCloseModal.addEventListener('click', function () {
        modal.style.display = 'none'
    
        event.target.classList.remove('reserved') // o elemento clicado muda de classe

    })


})


/*
document.querySelector('#li9').addEventListener('click', function () {
    hour = '9 horas'
    console.log(hour)
    let li9 = document.querySelector('#li9')
    li9.classList.toggle('reserved')
    //li9.style.backgroundColor = 'grey'
    li9.innerHTML = 'reservado'
    modal.style.display = 'block'
})

//agendar
buttonAgend.addEventListener('click', function () {
    confirmDates.style.display = 'block'
    confirmName.innerHTML = "Nome: " + clientName.value
    confirmFone.innerHTML = "Telefone: " +  clientFone.value
})

//confirmar
buttonConfirmDates.addEventListener('click', function () {

    let body = {
        "Nome": clientName.value,
        "horario": hour,
        "telefone": clientFone.value
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

confirmDates.style.display = 'none'
modal.style.display = 'none'
clientName.value = ''
clientFone.value = ''
})

//fechar modal

*/
