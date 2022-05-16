const enterMainTask = document.querySelector(".enterMainTask");
const focusTask = document.querySelector(".focusTask");

const displayTask = document.querySelector(".display");

let savedTask = localStorage.getItem("maintask");
focusTask.innerText = savedTask;

const addFocusTask = (event) => {
  if (event.key === "Enter") {
    focusTask.innerText = event.target.value;
    localStorage.setItem("maintask", event.target.value);
  }
};

if (localStorage.getItem("userName")) displayTask.style.display = "block";

enterMainTask.addEventListener("keypress", addFocusTask);
