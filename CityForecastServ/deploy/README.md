#How to deploy

- Este diretório contem os arquivos necessários para o deploy do jar da aplicação, exceto o jar propriamente dito.  
- Para que seja possivel gerar a imagem utilizando o Dockerfile, copie o jar para dentro da pasta files de forma manual ou através de alguma pipeline.
Após então só rodar o comando `docker build -t tagName .` para geração da imagem. 