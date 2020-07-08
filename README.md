# Barbearia Retrô  
  
### Projeto  
Aplicação feita para cliente realizarem agendamentos e para os serviços da barbearia.  
O cliente pode escolher o tipo de serviço e escolher um horário para realizar o agendamento.  
  
Tecnologias utilizadas  
Html, Css, Javascript, Json Server.  
  
Demo do projeto https://ricardobaltazar.github.io/Barbearia-retro-javascript/index.html  
  
![barberResponsive](https://user-images.githubusercontent.com/56805229/86974869-70f57b00-c14d-11ea-80da-311d09c88fd3.gif)  
![barber](https://user-images.githubusercontent.com/56805229/86974901-8074c400-c14d-11ea-981a-3469990fceed.gif)  
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
  
### Json Server  
Você precisa ter o npm instalado em sua maquina para poder instalar o json Server.  
Baixe o node e no terminal digite ```npm install```  
Crie uma pasta no seu computador, abra o terminal nela e digite ``` npm install -g json-server ```  
Crie a pasta do seu projeto e nela crie um arquivo chamado db.json. dentro desse arquivo crie uma estrutura json, exemplo:  
```
{
  "exemplo": []
}
```  
Na pasta onde esta o arquivo db.json abra o terminal i digite ``` json-server --watch db.json --port 8000```  
Link da API ```http://localhost:8000/exemplo```
  
### Como contribuir  
  
* Faça um fork desse repositório;  
* Crie sua feature branch: ```git checkout -b my-new-feature```  
* Adicione os arquivos modificados: ``` git add .```  
* Faça um Commit com suas alterações: ```git commit -m "Add some feature"```  
* Faça um push da sua branch: ``` git push origin my-new-feature ```  
* Envie um Pull Request para esse repositório  
  
* Adicione um título e uma descrição que deixe claro sua sugestão :v:  
  
### Licença  
[MIT license](https://github.com/RicardoBaltazar/Barbearia-retro-javascript/blob/master/LICENSE)  
