<p align="center">
   <img src="./.github/logo.png" alt="Happy" width="280"/>
</p>

<p align="center">
  <a href="#movie_camera-web-preview">Web Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#movie_camera-mobile-preview">Mobile Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <!-- <a href="#file_folder-demo-website">Demo Website</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; -->
  <a href="#books-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#green_book-how-to-run">How to Run</a>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/antonio-victor-melo-trindade-48aab615b//">
      <img alt="Antonio Victor Melo Trindade" src="https://img.shields.io/badge/-Antonio_Victor_Melo_Trindade-d21100?style=flat-square&logo=Linkedin&logoColor=white&labelColor=3700ff" />
   </a>
  
</p>

<p align="center">
  <img src=".github/landing.png" alt="Happy" width="100%">
</p>

## :movie_camera: Web Preview
![Happy web preview](.github/happy_web.gif "Happy Web Preview")

## :movie_camera: Mobile Preview
![Happy mobile preview](.github/happy_mobile.gif "Happy Mobile Preview")

<!-- ## :file_folder: Demo Website
You can acess the website at:     
👉  Demo:  -->

## :books: Technologies

This project was made using the follow technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## :computer: Project
👦🏡👧 Happy is a project to register orphanages made with React.js, Node.js and React Native using Typescript during the 3rd edition of Next Level Week given by Rocketseat. It's intended to be a way of bringing happiness and smiles to children of all ages. 👦🏡👧 
 
## :green_book: How to run

### Clone Repository
```bash
$ git clone https://github.com/antoniovictormt/happy.git
```

### Run Web Project
💻 Entre na pasta [`web/`](web/) e execute os seguintes comandos:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Instalar dependências
$ npm install
# Iniciar servidor de desenvolvimento
$ npm start
```
</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Instalar dependências
$ yarn
# Iniciar servidor de desenvolvimento
$ yarn start
```
</details>
> ⚠️ Go to http://localhost:3000/ to see the result.

### Run Server Project
🌐 Entre na pasta [`server/`](server/) e execute os seguintes comandos:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Instalar dependências
$ npm install
# Criar banco de dados
$ npm typeorm migration:run
# Iniciar servidor
$ npm dev
```
</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Instalar dependências
$ yarn
# Criar banco de dados
$ yarn typeorm migration:run
# Iniciar servidor de desenvolvimento
$ yarn dev
```
</details>
> ⚠️ Go to http://localhost:3333/ to see the result.
> ⚠️ O Banco de Dados fica salvo em [`server/src/database/database.sqlite`](server/src/database/database.sqlite)

### Run Mobile Project

📱 Entre na pasta [`mobile/`](mobile/) e execute os seguintes comandos:

<details>
<summary><i>com <b>npm</b></i></summary>

```bash
# Instalar dependências
$ npm install
# Iniciar servidor de desenvolvimento
$ npm start
```
</details>

<details>
<summary><i>com <b>yarn</b></i></summary>

```bash
# Instalar dependências
$ yarn
# Iniciar servidor de desenvolvimento
$ yarn start
```
</details>
> ⚠️ Go to http://localhost:19002/ to see the result.
> ⚠️ No arquivo **api.ts** dentro da pasta [`mobile/src/services/`](mobile/src/services/) é necessário colocar o seu IP local na variável baseURL, mantendo a porta 3333 do servidor.
