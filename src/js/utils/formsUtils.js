import { notes } from "../state";

const onOpenUpdateForm = (event) => {
  const parentNode = event.target.closest("tr");
  const noteId = parentNode.dataset.key;
  const noteToUpdate = notes.find((note) => note.id === noteId);

  //set updateForm values
  const noteToUpdateId = document.getElementById("noteId");
  const noteName = document.getElementById("updateNoteName");
  const noteContent = document.getElementById("updateNoteContent");
  const noteCategory = document.getElementById("updateNoteCategory");
  noteToUpdateId.value = noteToUpdate.id;
  noteName.value = noteToUpdate.name;
  noteContent.value = noteToUpdate.content;
  noteCategory.value = noteToUpdate.category;
};
const onCloseUpdateForm = () => {
  //set updateForm values
  const updateNoteName = document.getElementById("updateNoteName");
  const updateNoteContent = document.getElementById("updateNoteContent");
  const updateNoteCategory = document.getElementById("updateNoteCategory");
  updateNoteName.value = "";
  updateNoteContent.value = "";
  updateNoteCategory.value = "";
};

export { onOpenUpdateForm, onCloseUpdateForm };
