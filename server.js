//npm init -y
//npm install express -save --> o -save serve para trazer o express para dentro da aplicação e facilitar para quem baixar
//iniciar o servidor com -> node server.js
//npm install nodemon -d
//nodemon server.js
const express = require('express')
const server = express()

server.use(express.static('public'));

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))


server.get('/', function(req, res){
    //res.send("index.html")
    return res.sendFile(__dirname+ "/src/views/index.html")
})

server.get('/create', function(req, res){
    //res.send("index.html")
    return res.sendFile(__dirname+ "/src/views/create.html")
})

server.listen(3000, function(){
    console.log('Servidor rodando')
})