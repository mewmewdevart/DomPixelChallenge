<p align="center">
  <img src="https://github.com/user-attachments/assets/8c53234c-ffc3-477d-af86-bd3502a5052e" alt="Dom Pixel Logo" style="width: 300px;">
</p>

<p align="center">
	<b><i>
    💼 | Minha solução para o desafio técnico da vaga de Dev. FrontEnd Jr na DomPixel.
  </i></b><br>
</p>

<p align="center">
	<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/mewmewdevart/DompixelBlog?color=054DFC" />
	<img alt="Main language" src="https://img.shields.io/github/languages/top/mewmewdevart/DompixelBlog?color=054DFC"/>
	<img alt="License" src="https://img.shields.io/github/license/mewmewdevart/DompixelBlog?color=054DFC"/>
</p>

<p align="center">
	<a href="https://dompixel-blog-peach.vercel.app/" target="_blank">(Em Desenvolvimento)</a> 
</p>

## Sumário
1. [Desafio](#desafio)
2. [Curiosidade](#curiosidade)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Implementações](#implementações)
5. [Instruções](#instruções)
    - [Pré-requisitos](#pré-requisitos)
    - [Rodando o Projeto Localmente](#rodando-o-projeto-localmente)
      - [Backend (dompixel-backend)](#backend-dompixel-backend)
      - [Frontend (dompixel-blog)](#frontend-dompixel-blog)
6. [Resultado](#resultado)
    - [Frontend](#frontend)
    - [Backend](#backend)
7. [Tecnologias](#tecnologias)
8. [Referências](#referências)
9. [Licença](#licença)
10. [Contato](#contato)

## Desafio

O desafio propõe o desenvolvimento de um blog usando Next.js e Mantine. A aplicação deve permitir que os usuários visualizem e leiam as postagens do blog, bem como criem novas postagens. Como desenvolvedora frontend, sou responsável por criar o layout da página e preparar o frontend para receber os dados do backend.

- **Página Inicial:** O usuário pode ver os posts atuais, bem como as postagens mais recentes e populares, com informações sobre data, autor, título e uma descrição curta do conteúdo.
- **Página de Detalhes:** O usuário poderá ver a página do conteúdo com os aspectos mencionados acima (data, autor, etc.), além de visualizar o texto completo da postagem.
- **Página de Criação de Postagens:** O usuário pode visualizar as postagens antigas e criar novas, interagindo com o formulário.

## Curiosidade
Desenvolvi uma interface no Figma simulando como eu gostaria que o blog fosse. Isso me ajudou na estruturação do layout, embora eu não tenha sido 100% fiel ao design.  
<a href=" " target="_blank">Figma - Protótipo do Desafio: DomPixel Blog</a>

## Estrutura do Projeto

- `dompixel-backend/`: Pasta que contém o backend da aplicação, uma API desenvolvida usando Node - Express com dados fictícios.
- `dompixel-blog/`: Pasta que contém o frontend do projeto, desenvolvido utilizando Next e Mantine com Tailwind.

## Implementações

**Mandatório/**

- [x] **Configuração Inicial:** O candidato deve configurar um projeto Next.js funcional. Isso inclui a configuração do ambiente de desenvolvimento e a instalação das dependências necessárias.
- [x] **Criar uma página inicial** que liste postagens de blog. As postagens devem ser obtidas de uma API falsa (simulada) usando fetch ou axios. Cada postagem deve exibir seu título, data de publicação e uma imagem de capa.
- [x] **Página de Detalhes:** Quando um usuário clicar em uma postagem na página inicial, ele deve ser redirecionado para uma página de detalhes que exiba o conteúdo completo da postagem, incluindo texto e imagens.
- [x] **Criação de Postagens:** Implemente uma página onde os usuários possam criar novas postagens de blog. Eles devem poder inserir um título, conteúdo de texto e uma imagem de capa. Os dados da postagem devem ser enviados para a API falsa para armazenamento.
- [x] **Estilo:** A aplicação deve ser estilizada de forma atraente e responsiva (usar Mantine [https://mantine.dev/] para componentização).
- [x] **Controle de Estado:** Use o estado local do Next.js para gerenciar os dados da aplicação, como postagens e formulários.
- [x] **Responsividade:** Aplicar responsividade para este projeto para diferentes tamanhos de tela.

**Bônus/** 🎁🎁🎁

- [ ] **Implementar um sistema de autenticação básico**, permitindo que os usuários façam login antes de criar postagens.
- [ ] **Adicionar funcionalidade de pesquisa** para que os usuários possam procurar postagens por título ou conteúdo.
- [ ] **Implementar animações ou transições** para melhorar a experiência do usuário.

**Bônus Pessoal/**

- [ ] **Testes automatizados no frontend** usando Cypress.
- [ ] **Testes automatizados no backend.**

## Instruções

### Pré-requisitos

❗️ | Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de prosseguir:

- [Node](https://nodejs.org/pt): Linguagem de programação para o backend.
- [Node.js](https://nodejs.org/): Plataforma JavaScript para o frontend.

### Rodando o Projeto Localmente

1. **Clone o repositório**

```bash
# Clone o repositório em formato HTTPS e digite o seguinte comando no terminal
$ git clone https://github.com/mewmewdevart/DompixelBlog.git

# Clone o repositório em formato SSH e digite o seguinte comando no terminal
$ git clone git@github.com:mewmewdevart/DompixelBlog.git

# Entre dentro do repositório
$ cd DompixelBlog
```

#### Backend (dompixel-backend)

TO DO/

#### Frontend (dompixel-blog)

1. **Instalação de dependências:**

```bash
# Em outro terminal, navegue até o diretório do frontend
$ cd dompixel-blog

# Instale as dependências do projeto
$ npm install
```

2. **Execute o servidor de desenvolvimento:**

```bash
# Inicie o servidor de desenvolvimento
$ npm start

# Acesse a visualização do Frontend através da URL http://localhost:3000/
```

**Observação:** Tanto o backend quanto o frontend devem estar em execução em terminais diferentes para funcionarem corretamente ao rodar o projeto localmente.

## Resultado (TO DO)

### Frontend

- Resultado das implementações no Frontend : Url : ```http://localhost:3000/```

### Backend

## Experiência (TO DO)



## Tecnologias

- [VS Code](https://code.visualstudio.com/): Ambiente de desenvolvimento integrado.
- [Git Bash](https://git-scm.com/downloads): Git Bash para realizar commits.
- [Figma](https://www.figma.com/): Ferramenta de prototipagem para desenvolver elementos da interface.
- [Node.js](https://nodejs.org/en): Plataforma para instalação de pacotes necessários para o frontend (React, Material UI, Bootstrap, etc.).
- [Python](https://www.python.org/downloads/): Python para importação de pacotes no backend.

## Referências

- [Markdown - Basic Syntax](https://www.markdownguide.org/basic-syntax/): Documentação sobre a sintaxe básica do Markdown.
- [W3Schools](https://www.w3schools.com/): Documentação e tutoriais práticos.
- [Figma Community](https://www.figma.com/community): Inspiração na prototipação do projeto.
- Fóruns e blogs da internet, como Alura, Stack Overflow e Geeks for Geeks, para sanar dúvidas relacionadas à linguagem.

## Licença

Este projeto é licenciado nos termos do arquivo [LICENÇA](LICENSE). Consulte o arquivo para obter mais detalhes.

## Contato

<p align="center">
  Desenvolvido com muito ☕ por
  <a href="https://linktr.ee/mewmewdevart" target="_blank">Larissa Cristina Benedito</a>
</p>


Sinta-se à vontade para ajustar conforme necessário!
