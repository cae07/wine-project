# Bem vindos ao Wine Project

## Objetivo

---

Projeto desenvolvido para avaliação de capacidades em uma vaga front-end.

---

## O desafio

---

O desafio será implementar um e-commerce para venda de vinhos que deverá ter as seguintes funcionalidades:

 * Catálogo de produtos com paginação
 * Filtragem produtos por preço
 * Busca por nome do produto
 * Adicionar e remover produtos do carrinho

---


## Como instalar

Pré-requisitos para rodar o projeto:
- NPM

Copie o ssh do projeto `git@github.com:cae07/wine-project.git`

* Abra um terminal no seu computador e utilize os comandos abaixo na ordem que são apresentados:

* `git clone git@github.com:cae07/wine-project.git`
* `cd wine-project`
* `cd wine-project`
- Desculpe por isso, criei uma pasta dentro da outra
* `npm install`
* `npm start`

A aplicação rodará na porta 3000.

---

## Arquitetura da aplicação

```
├── README.md
├── src
│   ├── setupTests.js
│   ├── index.js
│   ├── App.js
│   │
│   ├── utils
│   │   ├── localStorage.js
│   │   └── StarCreator.js
│   │
│   ├── services
│   │   └── apiService.js
│   │
│   ├── Pages
│   │   ├── Cart.jsx
│   │   ├── ContatoPage.jsx
│   │   ├── index.js
│   │   ├── Main.jsx
│   │   ├── Maintenence.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Success.jsx
│   │
│   ├── Images
│   │   ├── logo.jpeg
│   │   ├── manutencao.jpg
│   │   ├── star.png
│   │   └── sucesso.jpeg
│   │
│   ├── css
│   │   ├── cart.css
│   │   ├── contatos.css
│   │   ├── details.css
│   │   ├── header.css
│   │   ├── inicial.css
│   │   ├── maintenence.css
│   │   ├── products.css
│   │   ├── searchBar.css
│   │   └── sucess.css
│   │
│   ├── Context
│   │   ├── myContext.js
│   │   └── Provider.js
│   │
│   ├── contacts
│   │   ├── Email.jsx
│   │   ├── GitHub.jsx
│   │   ├── index.js
│   │   ├── Linkedin.jsx
│   │   └── Whatsapp.jsx
│   │
│   └── Component
│       ├── sub-components
│       │   ├── index.js
│       │   ├── PrincipalAside.jsx
│       │   ├── PrincipalList.jsx
│       │   └── SeatchBar.js
│       │
│       ├── Details.jsx
│       ├── Header.jsx
│       ├── index.js
│       └── Products.jsx
│
├── cypress
│   ├── downloads
│   ├── fixtures
│   ├── integration
│   │   └── end2end.spec.js 
│   │
│   ├── plugins
│   └── support
│
├── package-lock.json
└── package.json

```

### Tecnologias

---

* React
* bootstrap
* react-bootstrap
* eslint
* prop-types
* axios
* cypress

---

### Comandos básicos

---

#### Iniciar aplicação
- npm run cypress:open

#### Rodar testes
- npm run cypress:open

---

## Link para o projeto

`aqui vai o link para o projeto`

---

# Divirta-se
