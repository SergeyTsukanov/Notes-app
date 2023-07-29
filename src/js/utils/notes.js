import { v4 as uuidv4 } from "uuid";
import {
  notes,
  addNoteItem,
  removeNoteItem,
  updateNoteItem,
  getNoteItemById,
} from "./state";
import noteMarkup from "../constants/noteMarkup";
console.log(notes);

const renderItem = (item) => {
  const noteHTML = noteMarkup(item);
  const note = document.querySelector(`[data-key="${item.id}"]`);

  if (note) {
    note.innerHTML = noteHTML;
  } else {
    let notes;
    if (!item.isArchive) {
      notes = document.getElementById("#notes");
    } else {
      notes = document.getElementById("#archivedNotes");
    }
    notes.insertAdjacentHTML("beforeend", noteHTML);
  }
};

const createNote = (formData) => {
  const newNote = {
    id: uuidv4(),
    name: formData.get("noteName"),
    created: new Date().toDateString(),
    category: formData.get("noteCategory"),
    content: formData.get("noteContent"),
    isArchive: false,
    dates: [],
  };

  addNoteItem(newNote);
  renderItem(newNote);
};
const removeNoteMarkup = (event) => {
  const parentNode = event.target.closest("tr");
  parentNode.remove();
  return parentNode;
};
const removeNote = (event) => {
  const parentNode = removeNoteMarkup(event);
  const noteId = parentNode.dataset.key;
  removeNoteItem(noteId);
  return parentNode;
};
const updateNote = (formData) => {
  const id = formData.get("id");
  const updatedNoteContent = formData.get("updateNoteContent");
  const updatedNoteName = formData.get("updateNoteName");
  const updatedNoteCategory = formData.get("updateNoteCategory");

  const updatedNote = {
    name: updatedNoteName,
    category: updatedNoteCategory,
    content: updatedNoteContent,
  };

  updateNoteItem(id, updatedNote);
  const note = notes.find((note) => note.id === id);
  renderItem(note);
};

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
const toggleArchiveNote = (event) => {
  const parentNode = event.target.closest("tr");
  const noteId = parentNode.dataset.key;
  const noteToUpdate = getNoteItemById(noteId);
  updateNoteItem(noteId, { isArchive: !noteToUpdate.isArchive });
  removeNoteMarkup(event);
  const noteToRender = getNoteItemById(noteId);
  renderItem(noteToRender);
};

export default {
  removeNote,
  createNote,
  updateNote,
  toggleArchiveNote,
  onOpenUpdateForm,
  onCloseUpdateForm,
};
