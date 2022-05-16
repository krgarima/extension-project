const addTask = document.querySelector("#push");
const allTasks = document.querySelector("#tasks");
const input = document.querySelector("#newtask input");

let myTasks = [];

const addNewTasks = () => {
  if (input.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    allTasks.innerHTML += `
          <div class="task">
              <span id="taskname">
              <input class="task done" type="checkbox"/>
                  ${input.value}
              </span>
              <button class="delete">
              ❌
              </button>
          </div>
      `;
    myTasks = [...myTasks, { name: input.value, done: false }];
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
  }
  const current_tasks = document.querySelectorAll(".delete");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};

addTask.addEventListener("click", addNewTasks);
