// Import our custom CSS
import "../scss/styles.scss";
import "bootstrap";
import {
  removeNote,
  createNote,
  updateNote,
  toggleArchiveNote,
} from "./notes";
import { renderStats } from "./state";
import { onCloseUpdateForm, onOpenUpdateForm } from "./utils/formsUtils";

// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

const addNoteBtn = document.querySelector(".addNote");
const closeFormBtn = document.querySelector(".closeForm");
const addNoteForm = document.getElementById("#addNoteForm");
const appNotes = document.getElementById("#notes");
const appArchivedNotes = document.getElementById("#archivedNotes");
const updateNoteForm = document.getElementById("#updateNoteForm");
const updateNoteFormModal = document.getElementById("exampleModal");
const closeModalBtn = document.getElementById("closeUpdateForm");
const showArchivedNotesBtn = document.getElementById("showArchivedNotes");
const hideArchivedNotesBtn = document.getElementById("hideArchivedNotes");

showArchivedNotesBtn.addEventListener(
  "click",
  () => {
    appArchivedNotes.style.display = "table";
    showArchivedNotesBtn.style.display = "none";
    hideArchivedNotesBtn.style.display = "block";
  },
  false
);

hideArchivedNotesBtn.addEventListener(
  "click",
  () => {
    appArchivedNotes.style.display = "none";
    showArchivedNotesBtn.style.display = "block";
    hideArchivedNotesBtn.style.display = "none";
  },
  false
);

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
    createNote(formData);
    addNoteForm.reset();
    closeFormBtn.click();
    renderStats();
  },
  false
);
updateNoteForm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    updateNote(formData);
    updateNoteForm.reset();
    closeModalBtn.click();
    renderStats();
  },
  false
);

appNotes.addEventListener(
  "click",
  (e) => {
    if (e.target.dataset.action === "delete") {
      removeNote(e);
    } else if (e.target.dataset.action === "edit") {
      onOpenUpdateForm(e);
    } else if (e.target.dataset.action === "archive") {
      toggleArchiveNote(e);
    }
    renderStats();
  },
  false
);
appArchivedNotes.addEventListener(
  "click",
  (e) => {
    if (e.target.dataset.action === "delete") {
      removeNote(e);
    } else if (e.target.dataset.action === "edit") {
      onOpenUpdateForm(e);
    } else if (e.target.dataset.action === "archive") {
      toggleArchiveNote(e);
    }
    renderStats();
  },
  false
);
updateNoteFormModal.addEventListener(
  "hidden.bs.modal",
  () => {
    onCloseUpdateForm();
  },
  false
);
