# Barbearia Reatrô  
  
##  Projeto  
É uma aplicação criada para realizar cadastros de horários e serviços da barbearia.  
  
## Tecnologias  
* [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
* [Css](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)  
  
  
  
```  
[
  {
    "Nome": "Ricardo Baltazar",
    "horario": "19 Horas",
    "telefone": "123456789",
    "Serviço": "Cabelo Barba",
    "id": 1
  },
  {
    "Nome": "Ricardo",
    "horario": "14 Horas",
    "telefone": "54213 5215",
    "Serviço": "Cabelo Barba",
    "id": 2
  }
]  
```  

## :smile: Como contribuir  
  
* Faça um fork desse repositório;  
* Crie sua feature branch: ```git checkout -b my-new-feature```  
* Adicione os arquivos modificados: ``` git add .```  
* Faça um Commit com suas alterações: ```git commit -m "Add some feature"```  
* Faça um push da sua branch: ``` git push origin my-new-feature ```  
* Envie um Pull Request para esse repositório  
  
* Adicione um título e uma descrição que deixe claro sua sugestão :v:  
  
## :ballot_box_with_check: Inicialização  
Primeiramente você precisa ter o npm instalado. ```npm uninstall npm -g```  

Voçe precisa instalar e inicializar o json server para guardar os dados cadastrados.   
* Primeiro instale o json server. Abra o terminal na pasta do projeto e digite o comando ``` npm install -g json-server ```  
* Crie um arquivo chamado db.json na pasta do seu projeto.  
* crie a estrutura do arquivo json para receber os dados.  
```
{
  "produtos": []
}
```  
* Vá até a pasta do projeto onde esta o arquivo db.json, abra o terminal e digite o comando ``` json-server --watch db.json --port 8000``` e inicie o json server na porta 8000  
* Acesse ```http://localhost:8000/produtos``` 
