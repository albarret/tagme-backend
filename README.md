# Projeto TagMe: Backend

Esse projeto compreende as funcionalidades de backend do projeto. É composto de uma API REST simples e uma conexão com bando de dados não-relacional, MongoDB.

Os recursos tecnológicos utilizados foram NodeJS, utilizando o framework Express, onde JavaScript é a linguagem escolhida. Além disso, por questão de comodidade para
testes e monitoramento das requisições http, foi utilizada a dependência Nodemon, que permite atualizar o servidor quando alguma alteração de código é feita sem precisar
encerrar e compilar novamente. A lista completa de dependências se encontra no arquivo ```package.json```.

## Como instalar e iniciar a aplicação

É necessário ter instalado um gerenciador de pacotes. Para este projeto, foi utilizado o gerenciador ```npm```, que pode facilmente ser obtido instalando a versão LTS
da ferramenta NodeJS (https://nodejs.dev/download).

**Caso o sistema operacional seja Windows**, é também recomendado que um terminal do tipo bash seja utilizado. Para isso recomenda-se o ```Git Bash```, que é instalado por
padrão junto com a versão mais recente do Git para Windows. Para sistemas Linux, esta etapa de instalação não é necessária.

Após instalada, acesse o diretório raíz do repositório (tagme-backend), abra o Git Bash (ou o terminal nativo do Linux) e use o commando ```$npm install```.

Após o término da instalação das dependências do projeto, basta apenas executar o comando ```npm start``` para iniciar a aplicação.
