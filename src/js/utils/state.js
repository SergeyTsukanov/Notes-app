import categories from "../constants/categories";

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

const getNotesLength = () => {
  const notesLength = notes.length;
  return notesLength;
};
const getArchivedNotesLength = () => {
  const archivedNotesLength = notes.reduce(
    (acc, curr) => (curr.isArchived ? acc + 1 : acc),
    0
  );
  return archivedNotesLength;
};

const getNonArchivedNotesLength = () => {
  const nonArchivedNotesLength = notes.reduce(
    (acc, curr) => (!curr.isArchived ? acc + 1 : acc),
    0
  );
  return nonArchivedNotesLength;
};

const countStats = () => {
  const statTable = {};

  for (const category of categories) {
    statTable[category] = { archived: 0, active: 0 };
  }

  console.log(statTable);
  for (const note of notes) {
    if (note.isArchive) {
      statTable[note.category].archived += 1;
    } else {
      statTable[note.category].active += 1;
    }
  }

  return statTable;
};
const renderStats = () => {
  console.log(notes);
  const statsTable = document.getElementById("#stats");
  const stats = countStats();
  let innerHtml = ``;

  for (const [key, value] of Object.entries(stats)) {
    innerHtml += `<tr>
                  <td>${key}</td>
                  <td>${value.active}</td>
                  <td>${value.archived}</td>
                  </tr>`;
  }

  const statsBody = statsTable.querySelector("tbody");
  statsBody.innerHTML = innerHtml;
};

export {
  notes,
  addNoteItem,
  removeNoteItem,
  updateNoteItem,
  getNoteItemById,
  getNotesLength,
  getArchivedNotesLength,
  getNonArchivedNotesLength,
  countStats,
  renderStats,
};
