# Barbearia Reatrô  
  
##  Projeto  
Aplicação feita para cliente realizarem agendamentos e para os serviços da barbearia, como cortar o cabelo e fazer a barba.  
  
* O cliente pode escolher entre os serviços que a barbearia disponibiliza    
* O cliente pode escolher o melhor horário para agendar o atendimento  
  
![barberResponsive](https://user-images.githubusercontent.com/56805229/86974869-70f57b00-c14d-11ea-80da-311d09c88fd3.gif)  
![barber](https://user-images.githubusercontent.com/56805229/86974901-8074c400-c14d-11ea-981a-3469990fceed.gif)  


  
## Tecnologias  
* Html  
* Css  
* Javascript  
* Json Server
  
Criei uma API com json server para manipular os dados do cliente. 
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
Primeiramente você precisa ter o npm instalado.  
```$ npm install```  

Voçe precisa instalar e inicializar o json server para guardar os dados.  
* Primeiro instale o json server. Abra o terminal na pasta do preferencia onde deseja guardar a configuração e digite o comando ``` npm install -g json-server ```  
* Crie um arquivo chamado db.json na pasta do seu projeto.  
* crie a estrutura do arquivo json para receber os dados.  
```
{
  "exemplo": []
}
```  
* Vá até a pasta do projeto onde esta o arquivo db.json, abra o terminal e digite o comando ``` json-server --watch db.json --port 8000``` e inicie o json server na porta 8000  
* Acesse ```http://localhost:8000/exemplo``` 
  
## :memo: Licença  
[MIT license](https://github.com/RicardoBaltazar/Barbearia-retro-javascript/blob/master/LICENSE)  
