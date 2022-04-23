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
