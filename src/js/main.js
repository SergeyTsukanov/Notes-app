// Import our custom CSS
import "../scss/styles.scss";
import notesUtils from "./utils";

// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

const addNoteBtn = document.querySelector(".addNote");
const closeFormBtn = document.querySelector(".closeForm");
const addNoteForm = document.getElementById("#addNoteForm");

addNoteBtn.addEventListener(
  "click",
  () => {
    addNoteForm.style.display = "block";
    addNoteBtn.style.display = "none";
    closeFormBtn.style.display = "block";
  },
  false
);

closeFormBtn.addEventListener(
  "click",
  () => {
    addNoteBtn.style.display = "block";
    addNoteForm.style.display = "none";
    closeFormBtn.style.display = "none";
  },
  false
);

addNoteForm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    notesUtils.createNote(formData);
    addNoteForm.reset();
    closeFormBtn.click();
  },
  false
);
