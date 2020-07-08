var clientName = document.querySelector('#name')
var clientFone = document.querySelector('#fone')
var modal = document.querySelector('.modal')
var modalConfirm = document.querySelector('.modal-confirm')
var buttonAgend = document.querySelector('#btnAgend')
var buttonCloseModal = document.querySelector('#btnCloseModal')
var li = document.querySelector(".lists");
var hour = ''
var hair = sessionStorage.getItem('Cabelo');
var beard = sessionStorage.getItem('Barba');

modal.style.display = 'none'
modalConfirm.style.display = 'none'

if(hair === null){
    hair = ''
}
if(beard === null){
    beard = ''
}
var totalValue = hair + ' ' + beard
console.log(totalValue)

li.addEventListener("click", function (event) {
    setEventTarget()
    setHourValue()
    backgroundColorItem()
    buttonAgend.addEventListener('click', function(){
        showModalConfirm()
    })
    buttonAgend.addEventListener('click', postApi)
    showModal()
    buttonCloseModal.addEventListener('click',function(){
        closeModal()
        event.target.classList.remove('reserved') //remover clase clicando em voltar 
    })
})

function setEventTarget(){
    console.log(event.target); // este é o elemento clicado
    console.log(event.target.value) //este é o valor do elemento clicado
}

function setHourValue(){
    hour = event.target.value
}

function backgroundColorItem(){
    event.target.classList.toggle('reserved') 
}

function showModal(){
    modal.style.display = 'block'
}

function closeModal(){
        modal.style.display = 'none'
}

function postApi() {
    let body = {
        "Nome": clientName.value,
        "horario": hour + ' Horas',
        "telefone": clientFone.value,
        'Serviço': totalValue
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
        
        modal.style.display = 'none' //esconder o modal ao fazer post
        clientName.value = ''
        clientFone.value = ''
}

function showModalConfirm(){
    modalConfirm.style.display = 'block'
    document.querySelector('#pname').innerHTML = 'Nome: ' + clientName.value
    document.querySelector('#pphone').innerHTML = 'Telefone: ' + clientFone.value
    document.querySelector('#ptime').innerHTML = 'Horário: ' + hour + ' Horas' 
    document.querySelector('#pservice').innerHTML = 'Serviço: ' + totalValue
    setTimeout(function(){
        modalConfirm.style.display = 'none'
    }, 5000)
}










