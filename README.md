# CityForecast

Projeto API para cadastro e visualização de temperatura de cidades utilizando a api openweathermap

## Tecnologias

 - Java 1.8
 - Angular 7.3.9
 - Spring Boot 2.1.4
 - H2 Database

## Execução do projeto

Servidor:
Acessar a pasta CityForecastServ executar o comando:  mvn spring-boot:run
ou importar o projeto em uma ide como STS (https://spring.io/tools) e executar a aplicação.

Cliente:
Acessar a pasta CityForecastWeb e executar o comando npm install para baixar todas as dependências.
Executar ´ng serve´ para executar a aplicação client;

A base de dados utilizar é o H2.
Os dados podem ser consultados através da url: 
http://localhost:8080/h2-console/login.jsp
Utilizar as configurações do arquivo application.properties do servidor para acessar a base de dados.
  
 ## Testes da Api
 
 Executar tanto servidor como cliente e acessar o endereço localhost:4200 onde será exibido a tela para cadastro de cidades.
 
 - Somente serão cadastradas cidades existentes na api openweathermap.
 - Ao clicar sobre uma cidade cadastrada será exibida tela com a previsão de 5 dias de cada cidade.
 
 
