# vcaixa.dev

.![vcaixa](https://cdn.startupi.com.br/wp-content/uploads/2018/04/api.png)

## Descrição do projeto

Esse projeto é uma API responsável por criar, alterar, deletar ou buscar dados referente a rotina de operação de caixa.

### O que é uma API

Interface de Programação de Aplicações ou Interface de Programação de Aplicação , cuja sigla API provém do Inglês Application Programming Interface, é um conjunto de rotinas e padrões estabelecidos por um software para a utilização das suas funcionalidades por aplicativos que não pretendem envolver-se em detalhes da implementação do software, mas apenas usar seus serviços.

## Tecnologias utilizadas

- JavaScript
- Node.js
- MongoDB

## Download do projeto

- Para iniciarmos a instalação é necessário fazer o download do projeto, clicando no botão "Code" e em seguida em "Download ZIP" ou copiando a URL (essa opção de download é interessante caso tenha o Git instalado na maquina).

Link para a instalação do Git: https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git

.![git clone](https://uploaddeimagens.com.br/images/002/844/430/full/git_clone.png?1598194955)

## Instalação do projeto

- Primeiramente é importante verificar se o Node está instalado corretamente na maquina, caso não esteja, segue abaixo o link para a sua instalação:

Link para a instalação do Node: https://nodejs.org/pt-br/download/package-manager/

- Abra o terminal apertanto as teclas "Windows + R" e digite "CMD" ou procure por "CMD" no campo de pesquisa. (caso esteja utilizando o Linux, aperte as teclas "Ctrl + Alt + T", ou digite "terminal" no campo de pesquisa ).

.![como abrir o terminal](https://uploaddeimagens.com.br/images/002/844/468/full/prompt.PNG?1598196010)

- Para aqueles que opitaram por instalar via URL disponibilizada no GitHub e estão com o Git devidamente configurado, basta digitar no terminal o comando "git clone " e logo a frente informar a URL, após isso entre no diretório do projeto. Quem opitou por baixar o arquivo zipado deve descompacta-lo e abrir o terminal no seu diretório.

.![primeiro passo terminal](https://uploaddeimagens.com.br/images/002/844/482/original/download.png?1598196452)

- Digite o comando "npm install", isso irá criar um diretório chamado "node_modules", aonde estará guardada todas as dependencias do projeto (esse processo pode demorar um pouco).

.![node_modules](https://uploaddeimagens.com.br/images/002/844/490/full/node_modules.png?1598197156)

- Digite o comando "npm start", o console irá retornar a fraze "MongoDB Connected" e pronto, a API está em perfeito funcionamento

.![conected](https://uploaddeimagens.com.br/images/002/844/495/original/conected.png?1598197467)

## Como utilizar a API

- Recomendo que utilize a aplicação Postman para melhor entendimento da API, também é possível verificar as requisições via URL no proprio navegador (exemplo: Google Chrome).

Link para a instação do Postman: https://www.postman.com/downloads/

- Com o Postman aberto basta selecionar o tipo da requisição e informar a rota, logo após clique em "Send", caso tudo seja informado corretamente, os dados deverão ser exibidos logo abaixo no formato JSON (também é possivel consultar a API sem que a mesma esteja funcionando localmente substituindo a rota da imagem pela URL: https://vcaixa-dev.herokuapp.com/api/movimentacao).

.![como utilizar](https://uploaddeimagens.com.br/images/002/844/511/original/como_utilizar.png?1598198270)

### Lista de Requisições

- get 127.0.0.1:3000/api/usuario
- post 127.0.0.1:3000/api/usuario
- put 127.0.0.1:3000/api/usuario/:id
- delete 127.0.0.1:3000/api/usuario/:id
- get 127.0.0.1:3000/api//usuario/:email'

- get 127.0.0.1:3000/api/resumoCaixa
- get 127.0.0.1:3000/api/resumoCaixa/:id
- post 127.0.0.1:3000/api/resumoCaixa
- put 127.0.0.1:3000/api/resumoCaixa/:id
- delete 127.0.0.1:3000/api/resumoCaixa/:id

- get 127.0.0.1:3000/api/categoria
- get 127.0.0.1:3000/api/categoria/:id
- post 127.0.0.1:3000/api/categoria
- put 127.0.0.1:3000/api/categoria/:id
- delete 127.0.0.1:3000/api/categoria/:id
- get 127.0.0.1:3000/api/categoria/id/:id

- get 127.0.0.1:3000/api/movimentacao
- get 127.0.0.1:3000/api/movimentacao/:data
- post 127.0.0.1:3000/api/movimentacao
- put 127.0.0.1:3000/api/movimentacao/:id
- delete 127.0.0.1:3000/api/movimentacao/:id
- get 127.0.0.1:3000/api/movimentacao/id/:id

#### Legenda
- get - busca por registros
- post - criação de novos registros
- put - edição de registros
- delete - exclusão de registros

Observação: Caso queira consultar a o serviço remotamente basta substituir o "127.0.0.1:3000" por "https://vcaixa-dev.herokuapp.com"
