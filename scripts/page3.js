var hour = ''
var name = document.querySelector('#name')
var btn = document.querySelector("#btn")


document.querySelector('#li9').addEventListener('click', function(){
    hour = '9 horas'
    console.log(hour)

    console.log(name)
})

document.querySelector('#li10').addEventListener("click", function(){
    hour = '10 horas'
    console.log(hour)
})

document.querySelector('#li11').addEventListener("click", function(){
    hour = '11 horas'
    console.log(hour)
})

document.querySelector('#li12').addEventListener("click", function(){
    hour = '12 horas'
    console.log(hour)
})

document.querySelector('#li13').addEventListener("click", function(){
    hour = '13 horas'
    console.log(hour)
})

document.querySelector('#li14').addEventListener("click", function(){
    hour = '14 horas'
    console.log(hour)
})

document.querySelector('#li15').addEventListener("click", function(){
    hour = '15 horas'
    console.log(hour)
})

document.querySelector('#li16').addEventListener("click", function(){
    hour = '16 horas'
    console.log(hour)
})

document.querySelector('#li17').addEventListener("click", function(){
    hour = '17 horas'
    console.log(hour)
})

document.querySelector('#li18').addEventListener("click", function(){
    hour = '18 horas'
    console.log(hour)
})

document.querySelector('#li19').addEventListener("click", function(){
    hour = '19 horas'
    console.log(hour)
})

document.querySelector('#li20').addEventListener("click", function(){
    hour = '20 horas'
    console.log(hour)
})


let body = { 
    "Nome": 'Ricardo',
    "horario": '9 horas',
    "telefone": '9556521'
}

fetch('http://localhost:8000/horario', {
method: 'POST',
headers: {'Content-Type': 'application/json'    },
body: JSON.stringify(body),
})
.then(function(response){
    return response.json();
})
.then(function(response){
    console.log('Success: ', JSON.stringify(response))
})
.catch(error => console.error('Error:', error))