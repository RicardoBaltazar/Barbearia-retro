//npm init -y
//npm install express -save --> o -save serve para trazer o express para dentro da aplicação e facilitar para quem baixar
//iniciar o servidor com -> node server.js
//npm install nodemon -d
//npm install mysql --save
//npm install body-parser --save
//nodemon server.js
const express = require('express')
const server = express()
let bodyParser = require('body-parser')

server.use(express.static('../public'));

//server.use(bodyParser.urlencoded({extended: true}))


//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))



server.get('/', function(req, res){
    //res.send("index.html")
    return res.sendFile(__dirname+ "/views/index.html")
})

server.get('/create', function(req, res){
    //res.send("index.html")
    console.log(req.query)
    return res.sendFile(__dirname+ "/views/create.html")
})

server.post("/savepoint", function(req,res){
    //req.body: o corpo do nosso formulário
    console.log(req.body)
})


server.listen(3000, function(){
    console.log('Servidor rodando')
})