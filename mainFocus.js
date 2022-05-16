const displayTask = document.querySelector(".display");

if (localStorage.getItem("userName")) displayTask.style.display = "block";
