import { v4 as uuidv4 } from "uuid";
let notes = [];

const renderItem = (item) => {
  const noteHTML = `<tr data-key=${item.id}>
        <th scope="row">${item.name}</th>
        <td>${item.created}</td>
        <td>${item.category}</td>
        <td>${item.content}</td>
        <td>${item.dates}</td>
                    </tr>`;

  const notes = document.getElementById("#notes");
  notes.insertAdjacentHTML("beforeend", noteHTML);
};

const createNote = (formData) => {
  const newNote = {
    id: uuidv4(),
    name: formData.get("noteName"),
    created: new Date().toDateString(),
    category: formData.get("noteCategory"),
    content: formData.get("noteContent"),
    isArchive: false,
  };
  notes = [...notes, newNote];
  renderItem(newNote);
};
const removeNote = (id) => {
  notes = [...notes.filter((note) => note.id !== id)];
};
const updateNote = (id, updatedNote) => {
  notes = notes.map((note) => {
    note.id === id ? { ...note, ...updatedNote } : note;
  });
};
const toggleArchiveNote = (id) => {};

export default {
  removeNote,
  createNote,
  updateNote,
  toggleArchiveNote,
};
