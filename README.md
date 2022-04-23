<h1 align="center"> Consumindo APi com utilizando --fetch-- </h1>

## 🚀 Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## 💻 Sobre o Projeto

Esse projeto básico aonde eu criei um layout para colocar algumas informações primeiramente de forma estática depois insere novas informações dinâmicas com JS.
<br>
Consumindo a API pública do github
<br>

## Imagem do projeto

<img alt="Image do projeto" title="Consumindo APi" src="./images-readme/image-1.png" width="400px" />

## Códido JavaScript

```JS
let userImage = document.querySelector(".userImage");
let userName = document.querySelector(".userName");
let Location = document.querySelector(".location");
let userlogin = document.querySelector(".userlogin");

const linksSocialMedia = {
  github: "diegoprocopio0",
};

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userImage.src = data.avatar_url;
      Location.textContent = data.location;
      userName.textContent = data.name;
      userlogin.textContent = data.login;
    })
    .catch((error) => console.log(error));
}

getGithubProfileInfo();
```

<p align="center">By Diego Silva </p>
