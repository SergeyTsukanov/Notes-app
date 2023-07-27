// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

console.log("hi");

const addTaskBtn = document.querySelector(".addTask");
const closeFormBtn = document.querySelector(".closeForm");
const addTaskForm = document.getElementById("#addTaskForm");
console.log(addTaskBtn);
console.log(addTaskForm);

addTaskBtn.addEventListener(
  "click",
  () => {
    addTaskForm.style.display = "block";
    addTaskBtn.style.display = "none";
    closeFormBtn.style.display = "block";
  },
  false
);

closeFormBtn.addEventListener(
  "click",
  () => {
    addTaskBtn.style.display = "block";
    addTaskForm.style.display = "none";
    closeFormBtn.style.display = "none";
  },
  false
);

