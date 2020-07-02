var modal = document.querySelector('.modal')
modal.style.display = 'none'
var hour = 'horas'
var form = document.querySelector('form')

document.querySelector('#li9').addEventListener('click', function(){
    hour = '9 horas'
    console.log(hour)

    let li9 = document.querySelector('#li9')    
    li9.style.backgroundColor = 'grey'
    li9.innerHTML = 'reservado'

    modal.style.display = 'block'

})

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



