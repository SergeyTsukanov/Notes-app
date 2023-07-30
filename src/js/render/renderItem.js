import noteMarkup from "../constants/noteMarkup";

noteMarkup
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

export default renderItem;
