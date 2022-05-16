const enterName = document.querySelector(".enterName");
const displayName = document.querySelector(".displayName");
const btnToAddName = document.querySelector("#addUserNameBtn");

const userNameInput = document.querySelector(".userNameInput");

let savedName = localStorage.getItem("userName");
displayName.innerText = savedName;

const saveName = () => {
  localStorage.setItem("userName", enterName.value);
  userNameInput.style.display = "none";
  location.reload();
};

if (localStorage.getItem("userName")) userNameInput.style.display = "none";

btnToAddName.addEventListener("click", saveName);
