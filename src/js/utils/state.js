let notes = [];

const addNoteItem = (note) => {
  notes = [...notes, note];
};

const removeNoteItem = (noteId) => {
  notes = [...notes.filter((note) => note.id !== noteId)];
};

const updateNoteItem = (id, payload) => {
  console.log("BeforeUpdate", notes);
  notes = notes.map((note) => {
    return note.id === id
      ? {
          ...note,
          ...payload,
        }
      : note;
  });
  console.log("AfterUpdate", notes);
};

const getNoteItemById = (id) => {
  return notes.find((note) => note.id === id);
};

export { notes, addNoteItem, removeNoteItem, updateNoteItem,getNoteItemById };
